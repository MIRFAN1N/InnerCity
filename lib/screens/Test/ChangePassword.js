import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {AllStyles, IntroStyle, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

export const ChangePasswordScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  AsyncStorage.getItem('UserId').then(value => {
    setUserId(value);
  });
  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
  });

  const UpdateData = () => {
    setLoading(true);
    if (!currentPassword) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Please add current Password!',
        button: 'OK',
        onPressButton: () => {
          setLoading(false);
          Dialog.hide();
        },
      });
    } else if (!newPassword) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Please add new Password!',
        button: 'OK',
        onPressButton: () => {
          setLoading(false);
          Dialog.hide();
        },
      });
    } else if (currentPassword === newPassword) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Please try adding different Password!',
        button: 'OK',
        onPressButton: () => {
          setLoading(false);
          Dialog.hide();
        },
      });
    } else {
      axios
        .post(
          'https://hungry-kepler.3-84-15-23.plesk.page/api/user/password/' +
            userId +
            '',
          {
            cpassword: currentPassword,
            password: newPassword,
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
            textBody: 'Your Password has been updated!',
            button: 'Great!',
            onPressButton: () => {
              setNewPassword('');
              setCurrentPassword('');
              Dialog.hide();
            },
          });
        })
        .catch(err => {
          setLoading(false);
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning!',
            textBody:
              "Your password doesn't match. Please add correct password",
            button: 'Oops!',
            onPressButton: () => {
              setNewPassword('');
              setCurrentPassword('');
              Dialog.hide();
            },
          });
          console.log(err);
        });
    }
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
                    <Text style={IntroStyle.RegisterLabel}>
                      Previous Password
                    </Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      secureTextEntry={true}
                      placeholderTextColor="#b3b3b3"
                      placeholder="Previous Password"
                      value={currentPassword}
                      onChangeText={setCurrentPassword}
                    />
                  </View>

                  <View style={IntroStyle.RegisterFormInput}>
                    <Text style={IntroStyle.RegisterLabel}>New Password</Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      secureTextEntry={true}
                      placeholderTextColor="#b3b3b3"
                      placeholder="New Password"
                      value={newPassword}
                      onChangeText={setNewPassword}
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
