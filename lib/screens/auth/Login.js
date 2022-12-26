import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = () => {
  // Init
  const navigation = useNavigation();
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState();

  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
    if (value) {
      AsyncStorage.setItem('Token', value);
    }
  });

  // Login
  const AppLogin = async () => {
    if (!email) {
      Alert.alert('Email is required.');
    } else if (!email.match(validRegex)) {
      Alert.alert('Invalid Email');
    } else if (!password) {
      Alert.alert('Password is required.');
    } else {
      setLoading(true);
      await axios
        .post('https://hungry-kepler.3-84-15-23.plesk.page/api/login', {
          email: email,
          password: password,
        })
        .then(function async(response) {
          let data = response.data.data;
          let userId = data.user.id;
          let token = data.token;
          setLoading(false);
          setEmail('');
          setPassword('');
          console.log(token);
          AsyncStorage.setItem('Token', token);
          AsyncStorage.setItem('UserId', userId.toString());
          navigation.navigate('Main', {
            screen: 'Home',
          });
        })
        .catch(function (err) {
          setLoading(false);
          Alert.alert('User Credentials are incorrect.');
          console.log(err);
        });
    }
  };

  return (
    <>
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
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        // behavior={Platform.select({android: 'height', default: 'padding'})}
        style={IntroStyle.LoginScreen}>
        <ScrollView style={IntroStyle.IntroBG}>
          <ImageBackground
            source={require('../../assets/images/bg/login-bg.png')}
            style={IntroStyle.LoginScreenBGImage}>
            <View style={IntroStyle.APPLogoOuter}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={IntroStyle.APPLogo}
              />
            </View>
            <View>
              <LinearGradient
                colors={['rgba(8, 32, 92, 0.8)', 'rgba(0, 0, 0, 0.8)']}
                style={IntroStyle.LoginContent}>
                <View>
                  <View style={IntroStyle.LoginGridRow}>
                    {/* Icon */}
                    <View style={IntroStyle.FieldIcon}>
                      <Image
                        source={require('../../assets/images/icons/user.png')}
                        style={IntroStyle.FieldIconImage}
                      />
                    </View>
                    {/* Input */}
                    <View style={IntroStyle.FieldInput}>
                      <TextInput
                        name="Id"
                        style={IntroStyle.FormField}
                        placeholder="Your Email"
                        value={email}
                        // value="waqar@napollo.net"
                        onChangeText={value => setEmail(value)}
                      />
                    </View>
                  </View>
                  <View style={IntroStyle.LoginGridRow}>
                    {/* Icon */}
                    <View style={IntroStyle.FieldIcon}>
                      <Image
                        source={require('../../assets/images/icons/password.png')}
                        style={IntroStyle.FieldIconImage}
                      />
                    </View>
                    {/* Input */}
                    <View style={IntroStyle.FieldInput}>
                      <TextInput
                        style={IntroStyle.FormField}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        // value="password"
                        onChangeText={value => setPassword(value)}
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={IntroStyle.FormLink}>Forget your password?</Text>
                </View>
                <TouchableOpacity onPress={AppLogin}>
                  <View style={IntroStyle.LoginBtn}>
                    <Text style={IntroStyle.LoginBtnText}>Login</Text>
                  </View>
                </TouchableOpacity>

                <View>
                  <Text style={IntroStyle.LoginConnect}>or connect with</Text>
                </View>

                <View style={IntroStyle.socialButtons}>
                  <TouchableOpacity
                    style={IntroStyle.socialButton}
                    underlayColor="#fff">
                    <Image
                      source={require('../../assets/images/icons/google.png')}
                      style={IntroStyle.WelcomeGoogleImg}
                    />
                    <Text style={IntroStyle.WelcomeGoogleBtnText}>Google</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={IntroStyle.socialButton}
                    underlayColor="#fff">
                    <Image
                      source={require('../../assets/images/icons/facebook.png')}
                      style={IntroStyle.WelcomeFacebookImg}
                    />
                    <Text style={IntroStyle.WelcomeGoogleBtnText}>
                      Facebook
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={IntroStyle.signUpText}>
                  <Text style={IntroStyle.loginConnect}>
                    Don't have account?{' '}
                  </Text>
                  <Link to={{screen: 'Register'}}>
                    <Text style={IntroStyle.signupLink}>Sign up</Text>
                  </Link>
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
