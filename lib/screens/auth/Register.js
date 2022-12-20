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
} from 'react-native';
import {IntroStyle} from '../../util/styles/Theme';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const UserRegister = () => {
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
        console.log(response.data);
        Alert.alert(
          'Account Created!!',
          'Your account has been successfully created!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Intro'),
            },
          ],
        );

        // setTimeout(() => {
        //   navigation.navigate('Intro');
        // }, 2000);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

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
              value={firstName}
              onChangeText={value => setFirstName(value)}
            />
          </View>

          <View style={IntroStyle.RegisterFormInput}>
            <Text style={IntroStyle.RegisterLabel}>Last Name</Text>
            <TextInput
              style={IntroStyle.RegisterFormField}
              placeholder="Your Last Name"
              value={lastName}
              onChangeText={value => setLastName(value)}
            />
          </View>

          <View style={IntroStyle.RegisterFormInput}>
            <Text style={IntroStyle.RegisterLabel}>Email</Text>
            <TextInput
              style={IntroStyle.RegisterFormField}
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
  );
};
