import React, {useState} from 'react';
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
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Constant from '../../util/constant/Constant';

export const ChangePasswordScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [showCurrPass, setShowCurrPass] = useState(true);
  const [showNewPass, setShowNewPass] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  AsyncStorage.getItem('UserId').then(value => {
    setUserId(value);
  });
  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
  });

  let CurrPassIcon = '';
  let NewPassIcon = '';

  if (showCurrPass) {
    CurrPassIcon = require('../../assets/images/icons/eye.png');
  } else {
    CurrPassIcon = require('../../assets/images/icons/hidden.png');
  }

  if (showNewPass) {
    NewPassIcon = require('../../assets/images/icons/eye.png');
  } else {
    NewPassIcon = require('../../assets/images/icons/hidden.png');
  }

  const changeCurrIcon = () => {
    setShowCurrPass(!showCurrPass);
  };

  const changeNewIcon = () => {
    setShowNewPass(!showNewPass);
  };

  const UpdateData = () => {
    const checkPass =
      /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*.{8,16}$/;

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
    } else if (newPassword && !newPassword.match(checkPass)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Please add a Strong Password!',
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
          Constant.LIVE_API_URL + 'user/password/' + userId + '',
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
              color="#DD6B25"
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
                      Current Password
                    </Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      secureTextEntry={showCurrPass}
                      placeholderTextColor="#b3b3b3"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChangeText={setCurrentPassword}
                    />
                    <TouchableOpacity
                      style={IntroStyle.FieldIconChangeLast}
                      onPress={changeCurrIcon}>
                      <Image
                        source={CurrPassIcon}
                        style={IntroStyle.FieldIconImageLast}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={IntroStyle.RegisterFormInput}>
                    <Text style={IntroStyle.RegisterLabel}>New Password</Text>
                    <TextInput
                      style={IntroStyle.RegisterFormField}
                      secureTextEntry={showNewPass}
                      placeholderTextColor="#b3b3b3"
                      placeholder="New Password"
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                    <TouchableOpacity
                      style={IntroStyle.FieldIconChangeLast}
                      onPress={changeNewIcon}>
                      <Image
                        source={NewPassIcon}
                        style={IntroStyle.FieldIconImageLast}
                      />
                    </TouchableOpacity>
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
