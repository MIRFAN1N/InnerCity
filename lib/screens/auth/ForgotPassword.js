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
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import HomeTopBar from './HomeTopBar';

export const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const UserRegister = () => {
    navigation.navigate('ResetPasswordLink');
    // if (!email) {
    //   Alert.alert('Email is required.');
    // } else if (!email.match(validRegex)) {
    //   Alert.alert('Invalid Email');
    // } else {
    //   setLoading(true);
    //   axios
    //     .post(Constant.LIVE_API_URL + 'register', {
    //       email: email,
    //     })
    //     .then(function (response) {
    //       console.log(response.data);
    //       setEmail('');
    //       Alert.alert(
    //         'Account Created!!',
    //         'Your account has been successfully created!',
    //         [
    //           {
    //             text: 'OK',
    //             onPress: () => {
    //               axios
    //                 .post(
    //                   Constant.LIVE_API_URL + 'login',
    //                   {
    //                     email: email,
    //                   },
    //                 )
    //                 .then(function async(res) {
    //                   let data = res.data.data;
    //                   let userId = data.user.id;
    //                   let token = data.token;
    //                   setLoading(false);
    //                   setEmail('');
    //                   AsyncStorage.setItem('Token', token);
    //                   AsyncStorage.setItem('UserId', userId.toString());
    //                   navigation.navigate('Main', {
    //                     screen: 'Home',
    //                   });
    //                 })
    //                 .catch(function (err) {
    //                   setLoading(false);
    //                   console.log(err);
    //                 });
    //             },
    //           },
    //         ],
    //       );
    //     })
    //     .catch(function (err) {
    //       setLoading(false);
    //       Alert.alert(
    //         'Alert!',
    //         'The email has already been taken. Please Login or Try another Email.',
    //         [
    //           {
    //             text: 'OK',
    //             onPress: () => {
    //               setLoading(false);
    //               setEmail('');
    //             },
    //           },
    //         ],
    //       );
    //       console.log(err);
    //     });
    // }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      // behavior={Platform.select({android: 'height', default: 'padding'})}
      style={IntroStyle.LoginScreen}>
      <View>
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
        <ImageBackground style={IntroStyle.ForgetScreenBG}>
          <Image
            source={require('../../assets/images/bg/register.png')}
            style={IntroStyle.ForgetScreenBGImage}
          />
        </ImageBackground>
        <HomeTopBar />
        {/* APP Logo */}
        <View style={IntroStyle.RegisterLogoOuter}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={IntroStyle.RegisterAPPLogo}
          />
        </View>
        <View>
          <View>
            <Text style={IntroStyle.SignUpWelcomeTitle}>
              Forgot Your Password!
            </Text>
            <Text style={IntroStyle.SignUpWelcomeText}>Don't Worry!</Text>
            <Text style={IntroStyle.SignUpWelcomeText}>
              Just fill in your email and we'll send you a link to reset your
              password
            </Text>
          </View>

          <View style={IntroStyle.RegisterForm}>
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

            <View style={IntroStyle.RegisterBtn}>
              <TouchableOpacity
                style={IntroStyle.LoginBtn}
                onPress={UserRegister}>
                <Text style={IntroStyle.LoginBtnText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
