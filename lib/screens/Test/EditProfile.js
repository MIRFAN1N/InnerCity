import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import {AllStyles, IntroStyle, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TopBar from './Rewards/TopBar';

const DefaultProfiel = require('../../assets/images/default/profile.png');

export const EditProfileScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
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
        const email = userinfo.email;
        const phone = userinfo.phone;
        const profile = userinfo.profile;
        setLoading(false);
        setUserEmail(email);
        setUserPhone(phone);
        setUserProfile(profile);
        // console.log(email);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [authToken, userId]);

  return (
    <View style={AllStyles.container}>
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
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="Edit Profile" />

          <View style={ProfileStyles.Container}>
            <View style={ProfileStyles.EditUserProfileOuter}>
              <View>
                <Image
                  source={userProfile !== null ? userProfile : DefaultProfiel}
                  style={ProfileStyles.EditUserProfileImage}
                />
              </View>
            </View>

            <View style={IntroStyle.EditProfileRegisterForm}>
              <ScrollView>
                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>First Name</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    placeholder="Your First Name"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Last Name</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    placeholder="Your Last Name"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Email</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    placeholder="Your Email"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Password</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Password</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Password</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </View>

                <View style={IntroStyle.RegisterFormInput}>
                  <Text style={IntroStyle.RegisterLabel}>Password</Text>
                  <TextInput
                    style={IntroStyle.RegisterFormField}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </View>
              </ScrollView>
            </View>

            <View style={ProfileStyles.EditFooter}>
              <View style={ProfileStyles.EditFooterRow}>
                <TouchableOpacity style={ProfileStyles.EditFooterBtn}>
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
    </View>
  );
};
