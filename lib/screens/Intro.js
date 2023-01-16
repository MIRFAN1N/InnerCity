import React, {useEffect, useRef, useState} from 'react';
// import all the components we are going to use
import {Text, View} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

// Screen
// import {WelcomeScreen} from './auth/Welcome';
import {LoginScreen} from './auth/Login';
import {RegisterScreen} from './auth/Register';
import {IntroStyle} from '../util/styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const AppIntro = (props, route) => {
  const [authToken, setAuthToken] = useState();
  const navigation = useNavigation();
  // props.route.params = login ? console.log('ok') : console.log('not');

  const [currentScreen, setCurrentScreen] = useState(0);
  const [slider, setSlider] = useState(null);

  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
    if (value) {
      AsyncStorage.setItem('Token', value);
    }
  });

  useEffect(() => {
    let login;
    if ((login = props.route.params)) {
      goToSlide(0);
      console.log('ok');
    } else {
      console.log('not');
    }
  }, [navigation, props.route.params]);

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

  const goToRegister = e => {
    goToSlide(1);
    console.log('callback');
  };

  const gotoSignIn = e => {
    goToSlide(0);
    console.log('callback');
  };

  const onDone = () => {
    // navigate to the next screen
    setCurrentScreen(currentScreen + 1);
  };

  const goToSlide = index => {
    slider.goToSlide(index);
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
          <LoginScreen goToRegister={goToRegister} />
        </View>
      );
    }

    if (item.screen === 'register') {
      return (
        <View style={IntroStyle.IntroBG}>
          <RegisterScreen gotoSignIn={gotoSignIn} />
        </View>
      );
    }
  };

  return (
    <>
      <AppIntroSlider
        data={screens}
        renderItem={RenderItem}
        ref={slider => setSlider(slider)}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={IntroStyle.Dots}
        activeDotStyle={IntroStyle.ActiveDot}
        onDone={onDone}
      />
    </>
  );
};

const screens = [{screen: 'login'}, {screen: 'register'}];
