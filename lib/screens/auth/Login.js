import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IntroStyle} from '../../util/styles/Theme';
import LinearGradient from 'react-native-linear-gradient';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
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
                    style={IntroStyle.FormField}
                    placeholder="Your Email"
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
                  />
                </View>
              </View>
            </View>

            <View>
              <Text style={IntroStyle.FormLink}>Forget your password?</Text>
            </View>

            <TouchableOpacity style={IntroStyle.LoginBtn} underlayColor="#fff">
              <Text style={IntroStyle.LoginBtnText}>Login</Text>
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
                <Text style={IntroStyle.WelcomeGoogleBtnText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            <View style={IntroStyle.signUpText}>
              <Text style={IntroStyle.loginConnect}>Don't have account? </Text>
              <Text
                style={IntroStyle.signupLink}
                onPress={() => {
                  navigation('/');
                }}>
                Sign up
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
