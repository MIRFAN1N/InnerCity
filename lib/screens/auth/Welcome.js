import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {IntroStyle} from '../../util/styles/Theme';

export const WelcomeScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'Your-web-client-id',
      offlineAccess: true,
    });
  });

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => {
        console.log(result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('User cancelled the login flow !');
        console.log('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Google play services not available or outdated !');
        console.log('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={IntroStyle.WelcomeScreen}>
      <View>
        {/* Welcome Banner */}
        <View style={IntroStyle.WelcomeBanner}>
          <Image
            source={require('../../assets/images/bg/welcome.png')}
            style={IntroStyle.WelcomeBannerImage}
          />
        </View>
        {/* Welcome Content */}
        {/* <View> */}
        <SafeAreaView>
          <ScrollView style={IntroStyle.WelcomeContent} vertical={true}>
            <View>
              <View>
                <View>
                  <Text style={IntroStyle.WelcomeContentTitle}>
                    Welcome to Inner City
                  </Text>
                </View>
                <View>
                  <Text style={IntroStyle.WelcomeContentSubTitle}>
                    We are here to listen to you, Come & Win new Prizes on every
                    game
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={IntroStyle.WelcomeGoogleBtn}
                    onPress={GoogleSingUp}>
                    <Image
                      source={require('../../assets/images/icons/google.png')}
                      style={IntroStyle.WelcomeGoogleImg}
                    />
                    <Text style={IntroStyle.WelcomeGoogleBtnText}>
                      Continue with Google
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={IntroStyle.WelcomeGoogleBtn}>
                    <Image
                      source={require('../../assets/images/icons/facebook.png')}
                      style={IntroStyle.WelcomeFacebookImg}
                    />
                    <Text style={IntroStyle.WelcomeGoogleBtnText}>
                      Continue with Facebook
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Buttons */}
              {/* Bottom Text */}
              <View>
                <Text style={IntroStyle.WelcomeContentText}>
                  By continuing, you agree to the Inner City Term & Condition
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};
