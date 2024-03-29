import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Constant from '../../util/constant/Constant';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';

export const RegisterScreen = props => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [tocCheckbox, setTocCheckbox] = useState(false);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const Alert = (alertText, title = 'Warning') => {
    Dialog.show({
      type: ALERT_TYPE.WARNING,
      title: title,
      textBody: alertText,
      button: 'close',
      autoClose: 1000,
    });
  };

  let PassIcon = '';

  if (showPass) {
    PassIcon = require('../../assets/images/icons/eye.png');
  } else {
    PassIcon = require('../../assets/images/icons/hidden.png');
  }

  const changeIcon = () => {
    setShowPass(!showPass);
  };

  const navSignIn = () => {
    props.gotoSignIn(true);
  };

  const UserRegister = () => {
    const checkPass =
      /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*.{8,16}$/;

    if (!firstName) {
      Alert('First Name is required.');
    } else if (!lastName) {
      Alert('Last Name is required');
    } else if (!email) {
      Alert('Email is required.');
    } else if (!email.match(validRegex)) {
      Alert('Invalid Email');
    } else if (!password) {
      Alert('Password is required.');
    } else if (password && !password.match(checkPass)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Alert!',
        textBody: 'Please add a strong password.',
        button: 'OK',
        onPressButton: () => {
          Dialog.hide();
        },
      });
    } else if (!tocCheckbox) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Alert!',
        textBody: 'Please check Terms of use before going further.',
        button: 'OK',
        onPressButton: () => {
          Dialog.hide();
        },
      });
    } else {
      setLoading(true);
      axios
        .post(Constant.LIVE_API_URL + 'register', {
          fname: firstName,
          lname: lastName,
          phone: '00000000000',
          email: email,
          password: password,
          confirm_password: password,
        })
        .then(function (response) {
          setLoading(false);
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Account Created!!',
            textBody: 'Your account has been successfully created!',
            button: 'OK',
            onPressButton: () => {
              axios
                .post(Constant.LIVE_API_URL + 'login', {
                  email: email,
                  password: password,
                })
                .then(function async(res) {
                  let data = res.data.data;
                  let userId = data.user.id;
                  let token = data.token;
                  setLoading(false);
                  setEmail('');
                  setPassword('');
                  AsyncStorage.setItem('Token', token);
                  AsyncStorage.setItem('UserId', userId.toString());
                  navigation.navigate('Main', {
                    screen: 'Home',
                  });
                  Dialog.hide();
                })
                .catch(function (err) {
                  setLoading(false);
                  console.log(err);
                });
            },
          });
        })
        .catch(function (err) {
          setLoading(false);
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Alert!',
            textBody:
              'The email has already been taken. Please Login or Try another Email.',
            button: 'OK',
            onPressButton: () => {
              setLoading(false);
              Dialog.hide();
              setEmail('');
              setPassword('');
            },
          });
          console.log(err);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      // behavior={Platform.select({android: 'height', default: 'padding'})}
      style={IntroStyle.LoginScreen}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={AllStyles.Indicator}
            visible={loading}
            color="#DD6B25"
          />
        ) : (
          ''
        )}
        {/* Background Image */}
        <ImageBackground style={IntroStyle.LoginScreenBG}>
          <Image
            source={require('../../assets/images/bg/register.png')}
            style={IntroStyle.LoginScreenBGImage}
          />
        </ImageBackground>
        {/* APP Logo */}
        <View style={IntroStyle.RegisterLogoOuter}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={IntroStyle.RegisterAPPLogo}
          />
        </View>
        <View>
          {/* Register Text */}
          <View>
            <Text style={IntroStyle.SignUpWelcomeTitle}>Welcome!</Text>
            <Text style={IntroStyle.SignUpWelcomeText}>Sign up to join</Text>
          </View>

          <View style={IntroStyle.RegisterForm}>
            <View style={IntroStyle.RegisterFormInput}>
              <Text style={IntroStyle.RegisterLabel}>First Name</Text>
              <TextInput
                style={IntroStyle.RegisterFormField}
                placeholderTextColor="#b3b3b3"
                placeholder="Your First Name"
                value={firstName}
                onChangeText={value => setFirstName(value)}
              />
            </View>

            <View style={IntroStyle.RegisterFormInput}>
              <Text style={IntroStyle.RegisterLabel}>Last Name</Text>
              <TextInput
                style={IntroStyle.RegisterFormField}
                placeholderTextColor="#b3b3b3"
                placeholder="Your Last Name"
                value={lastName}
                onChangeText={value => setLastName(value)}
              />
            </View>

            <View style={IntroStyle.RegisterFormInput}>
              <Text style={IntroStyle.RegisterLabel}>Email</Text>
              <TextInput
                style={IntroStyle.RegisterFormField}
                placeholderTextColor="#b3b3b3"
                placeholder="Your Email"
                value={email}
                onChangeText={value => setEmail(value)}
              />
            </View>

            <View style={IntroStyle.RegisterFormInput}>
              <Text style={IntroStyle.RegisterLabel}>Password</Text>
              <View style={IntroStyle.RegisterFormFieldPass}>
                <TextInput
                  style={IntroStyle.RegisterFormField}
                  secureTextEntry={showPass}
                  placeholderTextColor="#b3b3b3"
                  placeholder="Password"
                  maxLength={16}
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
                <TouchableOpacity
                  style={IntroStyle.FieldIconRegLast}
                  onPress={changeIcon}>
                  <Image
                    source={PassIcon}
                    style={IntroStyle.FieldIconImageLast}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={IntroStyle.CheckboxContainer}>
              <View style={IntroStyle.CheckboxFlex}>
                <CheckBox
                  disabled={false}
                  value={tocCheckbox}
                  tintColors={{true: '#DD6B25', false: '#fff'}}
                  checkedColor="#fff"
                  onValueChange={newValue => setTocCheckbox(newValue)}
                />
                <Text style={IntroStyle.CheckboxText}>I agree to the </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://ourinnercity.com/terms-of-services/',
                    )
                  }>
                  <Text style={IntroStyle.RegisterLinks}>Terms of Use</Text>
                </TouchableOpacity>
                <Text style={IntroStyle.CheckboxText}>
                  and have read and understand the
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('https://ourinnercity.com/privacy-policy/')
                  }>
                  <Text style={IntroStyle.RegisterLinks}> Priacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={IntroStyle.RegisterBtn}>
              <TouchableOpacity
                style={IntroStyle.LoginBtn}
                onPress={UserRegister}>
                <Text style={IntroStyle.LoginBtnText}>Register</Text>
              </TouchableOpacity>
            </View>

            <View style={IntroStyle.signUpText}>
              <Text style={IntroStyle.loginConnect}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={navSignIn}>
                <Text style={IntroStyle.signupLink}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Register Bottom Text */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
