import {CheckBoxBase} from '@react-native-community/checkbox';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {IntroStyle} from '../../util/styles/Theme';

export const RegisterScreen = () => {
  return (
    <ScrollView style={IntroStyle.LoginScreen}>
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
              placeholder="Password"
            />
          </View>

          <View style={IntroStyle.CheckboxContainer}>
            <Text style={IntroStyle.CheckboxText}>
              Sign me up for the Support America newsletter
            </Text>
          </View>

          <View style={IntroStyle.CheckboxContainer}>
            <Text style={IntroStyle.CheckboxText}>
              I agree to the terms of use and have read and understand the
              Privacy Policy
            </Text>
          </View>

          <View style={IntroStyle.RegisterBtn}>
            <TouchableOpacity style={IntroStyle.LoginBtn} underlayColor="#fff">
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
  );
};
