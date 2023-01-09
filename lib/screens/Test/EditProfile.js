import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {AllStyles, IntroStyle, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Constant from '../../util/constant/Constant';
const DefaultProfiel = require('../../assets/images/default/profile.png');

export const EditProfileScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const navigation = useNavigation();
  AsyncStorage.getItem('UserId').then(value => {
    setUserId(value);
  });
  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
  });

  var ProfilePic = userProfile;

  if (userProfile && profileUpdate) {
    ProfilePic = {uri: userProfile};
  } else if (userProfile) {
    ProfilePic = {uri: Constant.PROFILE_URL + userProfile};
  } else {
    ProfilePic = DefaultProfiel;
  }

  useEffect(() => {
    axios
      .get(Constant.LIVE_API_URL + 'user/data/' + userId + '', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        const data = response.data.data;
        const userinfo = data.user_info;
        const firstName = userinfo.fname;
        const lastName = userinfo.lname;
        const email = userinfo.email;
        const phone = userinfo.phone;
        const profile = userinfo.profile;
        setLoading(false);
        setUserEmail(email);
        setUserPhone(phone);
        setUserProfile(profile);
        setUserFirstName(firstName);
        setUserLastName(lastName);
        // console.log(email);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [authToken, userId]);

  const SelectImage = () => {
    const options = {
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log(ProfilePic);
      } else {
        // console.log('Response = ', response);
        setUserProfile(response.assets[0].uri);
        setProfileUpdate(true);
        // console.log(ProfilePic);
      }

      // if (response.error) {
      //   console.log('LaunchImageLibrary Error: ', response.error);
      // } else {
      //   console.log('LaunchImageLibrary');
      // }
    });
  };

  const UpdateData = () => {
    setLoading(true);

    let formdata = new FormData();

    formdata.append('fname', userFirstName);
    formdata.append('lname', userLastName);
    formdata.append('phone', userPhone);
    formdata.append('profile', {
      uri: userProfile,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    axios
      .post(Constant.LIVE_API_URL + 'user/update/' + userId + '', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setLoading(false);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Your profile has been updated!',
          button: 'Great!',
          onPressButton: () => {
            navigation.navigate('Main', {
              screen: 'Home',
            });
            Dialog.hide();
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const TopBar = () => {
    return (
      <View style={ProfileStyles.TopBarOuter}>
        <View style={ProfileStyles.TopBarSides}>
          <View style={ProfileStyles.TopBarLeft}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={ProfileStyles.TopBarFlex}>
              <View>
                <Image
                  source={require('../../assets/images/icons/back-arrow.png')}
                  style={ProfileStyles.TopBarIcon}
                />
              </View>
              <View style={ProfileStyles.TopBarTextOuter}>
                <Text style={ProfileStyles.TopBarText}>My Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={ProfileStyles.TopBarRight}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ChangePassword');
                }}>
                <View style={ProfileStyles.TopBarTextOuter}>
                  <Text style={ProfileStyles.TopBarText}>Change Password</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator
          size="large"
          visible={loading}
          style={AllStyles.Indicator}
          color="#000"
        />
      ) : (
        ''
      )}
      <KeyboardAvoidingView
        behavior="height"
        enabled
        style={IntroStyle.LoginScreen}>
        <ScrollView>
          <View style={AllStyles.EditProfileContainer}>
            <Image
              source={require('../../assets/images/bg/profile-bg.png')}
              style={AllStyles.MainBoxBG}
            />
            <View style={AllStyles.Overlay}>
              <View style={ProfileStyles.FullWidth}>
                <TopBar />

                <View style={AllStyles.EditProfileContainer}>
                  <View style={ProfileStyles.EditUserProfileOuter}>
                    <View style={ProfileStyles.EditUserProfile}>
                      <Image
                        source={ProfilePic}
                        style={ProfileStyles.EditUserProfileImage}
                      />
                      <TouchableOpacity
                        onPress={SelectImage}
                        style={ProfileStyles.EditProfileIcon}>
                        <Image
                          source={require('../../assets/images/icons/edit.png')}
                          style={ProfileStyles.EditProfileIconImg}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={IntroStyle.EditProfileRegisterForm}>
                    <View>
                      <View style={IntroStyle.RegisterFormInput}>
                        <Text style={IntroStyle.RegisterLabel}>First Name</Text>
                        <TextInput
                          style={IntroStyle.RegisterFormField}
                          placeholder="Your First Name"
                          value={userFirstName}
                          onChangeText={setUserFirstName}
                        />
                      </View>

                      <View style={IntroStyle.RegisterFormInput}>
                        <Text style={IntroStyle.RegisterLabel}>Last Name</Text>
                        <TextInput
                          style={IntroStyle.RegisterFormField}
                          placeholder="Your Last Name"
                          value={userLastName}
                          onChangeText={setUserLastName}
                        />
                      </View>

                      <View style={IntroStyle.RegisterFormInput}>
                        <Text style={IntroStyle.RegisterLabel}>
                          Phone Number
                        </Text>
                        <TextInput
                          style={IntroStyle.RegisterFormField}
                          placeholder="Your Phone Number"
                          value={userPhone}
                          onChangeText={setUserPhone}
                        />
                      </View>

                      <View style={IntroStyle.RegisterFormInput}>
                        <Text style={IntroStyle.RegisterLabel}>Email</Text>
                        <TextInput
                          style={IntroStyle.RegisterFormField}
                          placeholder="Your Email"
                          value={userEmail}
                          onChangeText={setUserEmail}
                          editable={false}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={ProfileStyles.EditFooter}>
                    <View style={ProfileStyles.EditFooterRow}>
                      <TouchableOpacity
                        style={ProfileStyles.EditFooterBtn}
                        onPress={UpdateData}>
                        <Text style={ProfileStyles.EditFooterBtnText}>
                          Save
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={ProfileStyles.EditFooterBtn}
                        onPress={() => navigation.navigate('Profile')}>
                        <Text style={ProfileStyles.EditFooterBtnText}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
