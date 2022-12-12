import React from 'react';
// import all the components we are going to use
import {View} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

// Screen
import {WelcomeScreen} from './auth/Welcome';
import {LoginScreen} from './auth/Login';
import {RegisterScreen} from './auth/Register';
import {IntroStyle} from '../util/styles/Theme';

export const AppIntro = () => {
  const RenderItem = ({item}) => {
    if (item.screen === 'welcome') {
      return (
        <View>
          <WelcomeScreen />
        </View>
      );
    }

    if (item.screen === 'register') {
      return (
        <View style={IntroStyle.IntroBG}>
          <RegisterScreen />
        </View>
      );
    }

    if (item.screen === 'login') {
      return (
        <View style={IntroStyle.IntroBG}>
          <LoginScreen />
        </View>
      );
    }
  };

  return (
    <>
      <AppIntroSlider
        data={screens}
        renderItem={RenderItem}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={IntroStyle.Dots}
        activeDotStyle={IntroStyle.ActiveDot}
      />
    </>
  );
};

const screens = [{screen: 'welcome'}, {screen: 'register'}, {screen: 'login'}];
