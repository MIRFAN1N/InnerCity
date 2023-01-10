import React, {useEffect, useRef, useState} from 'react';
// import all the components we are going to use
import {View} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

// Screen
// import {WelcomeScreen} from './auth/Welcome';
import {LoginScreen} from './auth/Login';
import {RegisterScreen} from './auth/Register';
import {IntroStyle} from '../util/styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const AppIntro = () => {
  const [authToken, setAuthToken] = useState();
  const navigation = useNavigation();
  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
    if (value) {
      AsyncStorage.setItem('Token', value);
    }
  });

  useEffect(() => {
    if (authToken !== null) {
      navigation.navigate('Main', {
        screen: 'Home',
      });
    } else {
      navigation.navigate('Intro', {
        screen: 'login',
      });
    }
  }, [authToken]);

  const slider = useRef();

  const gotoSlider = i => {
    slider.goToSlide = i;
    console.log('callback');
  };

  const RenderItem = ({item}) => {
    // if (item.screen === 'welcome') {
    //   return (
    //     <View>
    //       <WelcomeScreen />
    //     </View>
    //   );
    // }

    if (item.screen === 'login') {
      return (
        <View style={IntroStyle.IntroBG}>
          <LoginScreen renderItem={gotoSlider} />
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
        ref={ref => slider}
      />
    </>
  );
};

const screens = [{screen: 'login'}, {screen: 'register'}];
