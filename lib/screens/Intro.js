import React, {useState} from 'react';
 // import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

// Screen
import {WelcomeScreen} from './auth/Welcome';
import {LoginScreen} from './auth/Login';
import {RegisterScreen} from './auth/Register';
import { IntroStyle } from '../util/styles/Theme';
 
export const AppIntro = () => {
  const [showRealApp, setShowRealApp] = useState(false);
 
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
 
  const RenderItem = ({item}) => {
    if (item.screen == 'welcome') {
      return(
        <View>
          <WelcomeScreen />
        </View>  
      );
    }

    if (item.screen == 'register') {
      return(
        <View style={IntroStyle.IntroBG}>
          <RegisterScreen />
        </View>  
      );
    }

    if (item.screen == 'login') {
      return(
        <View style={IntroStyle.IntroBG}>
          <LoginScreen />
        </View>  
      );
    }
  };
 
  return (
    <>
      {/* {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : ( */}
        <AppIntroSlider
          data={screens}
          renderItem={RenderItem}
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={IntroStyle.Dots}
          activeDotStyle={IntroStyle.ActiveDot}
        />
      {/* )} */}
    </>
  );
};

const screens = [{screen: 'welcome',},{screen: 'register',},{screen: 'login',}];