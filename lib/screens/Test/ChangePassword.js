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
  ImagePickerIOS,
} from 'react-native';
import {AllStyles, IntroStyle, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Constant from '../../util/constant/Constant';

const DefaultProfiel = require('../../assets/images/default/profile.png');

export const ChangePasswordScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  AsyncStorage.getItem('UserId').then(value => {
    setUserId(value);
  });
  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
  });

  const SelectImage = () => {
    const options = {
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else {
        console.log('LaunchImageLibrary');
      }
    });
  };

  useEffect(() => {
    axios
      .get(
        'https://hungry-kepler.3-84-15-23.plesk.page/api/user/data/' +
          userId +
          '',
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
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

  const UpdateData = () => {
    setLoading(true);
    axios
      .post(
        'https://hungry-kepler.3-84-15-23.plesk.page/api/user/update/' +
          userId +
          '',
        {
          fname: userFirstName,
          lname: userLastName,
          phone: userPhone,
          profile: '',
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
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
                navigation.navigate('EditProfile');
              }}
              style={ProfileStyles.TopBarFlex}>
              <View>
                <Image
                  source={require('../../assets/images/icons/back-arrow.png')}
                  style={ProfileStyles.TopBarIcon}
                />
              </View>
              <View style={ProfileStyles.TopBarTextOuter}>
                <Text style={ProfileStyles.TopBarText}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="height"
        enabled
        style={IntroStyle.LoginScreen}>
        <View style={AllStyles.EditProfileContainer}>
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
          <Image
            source={require('../../assets/images/bg/profile-bg.png')}
            style={AllStyles.MainBoxBG}
          />
          <View style={AllStyles.Overlay}>
            <TopBar />

            <View style={AllStyles.EditProfileContainer}>
              <View style={IntroStyle.EditProfileRegisterForm}>
                <View>
                  <View style={IntroStyle.RegisterFormInput}>
                    <Text style={IntroStyle.RegisterLabel}>New Password</Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      placeholder="New Password"
                      value={userEmail}
                      onChangeText={setUserEmail}
                    />
                  </View>

                  <View style={IntroStyle.RegisterFormInput}>
                    <Text style={IntroStyle.RegisterLabel}>
                      Confirm Password
                    </Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      placeholder="Confirm Password"
                      value={userEmail}
                      onChangeText={setUserEmail}
                    />
                  </View>
                </View>
              </View>

              <View style={ProfileStyles.EditFooter}>
                <View style={ProfileStyles.EditFooterRow}>
                  <TouchableOpacity
                    style={ProfileStyles.EditFooterBtn}
                    onPress={UpdateData}>
                    <Text style={ProfileStyles.EditFooterBtnText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={ProfileStyles.EditFooterBtn}
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={ProfileStyles.EditFooterBtnText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
