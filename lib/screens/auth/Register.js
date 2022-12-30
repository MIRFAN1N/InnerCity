import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {AllStyles, IntroStyle} from '../../util/styles/Theme';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
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

  const UserRegister = () => {
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
    } else {
      setLoading(true);
      axios
        .post('https://hungry-kepler.3-84-15-23.plesk.page/api/register', {
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
                .post('https://hungry-kepler.3-84-15-23.plesk.page/api/login', {
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
            color="#000"
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
              <TextInput
                style={IntroStyle.RegisterFormField}
                secureTextEntry={true}
                placeholderTextColor="#b3b3b3"
                placeholder="Password"
                value={password}
                onChangeText={value => setPassword(value)}
              />
            </View>

            <View style={IntroStyle.CheckboxContainer}>
              <Text style={IntroStyle.CheckboxText}>
                Sign me up for the Support America newsletter
              </Text>
            </View>

            <View style={IntroStyle.CheckboxContainer}>
              <View style={IntroStyle.CheckboxFlex}>
                <Text style={IntroStyle.CheckboxText}>I agree to the </Text>
                <Text style={IntroStyle.RegisterLinks}>Terms of Use</Text>
                <Text style={IntroStyle.CheckboxText}>
                  and have read and understand the
                </Text>
                <Text style={IntroStyle.RegisterLinks}> Priacy Policy</Text>
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
              <Text style={IntroStyle.signupLink}> Sign in</Text>
            </View>
          </View>

          {/* Register Bottom Text */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
