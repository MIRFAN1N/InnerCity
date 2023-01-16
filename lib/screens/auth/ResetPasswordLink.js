import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';

export const ResetPasswordLink = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const BackLogin = () => {
    navigation.navigate('Intro');
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
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
        <ImageBackground
          source={require('../../assets/images/bg/register.png')}
          style={IntroStyle.ForgetScreenBG}>
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
                Check Your Email
              </Text>
              <Text style={IntroStyle.SignUpWelcomeText}>
                We have emailed you a password reset link at
              </Text>
              <Text style={IntroStyle.ForgotPasswordEmail}>
                Waqar@napollo.net
              </Text>
            </View>

            <View style={IntroStyle.RegisterForm}>
              <View style={IntroStyle.RegisterBtn}>
                <TouchableOpacity
                  style={IntroStyle.LoginBtn}
                  onPress={BackLogin}>
                  <Text style={IntroStyle.LoginBtnText}>Back to login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};
