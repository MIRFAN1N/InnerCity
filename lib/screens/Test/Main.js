import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import {RewardGrid} from './RewardGrid';

export const HomeScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [rewardTypes, setRewardTypes] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    axios
      .get('http://10.0.2.2:8000/api/reward-type', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        const data = response.data.data;
        const types = data.types;
        setRewardTypes(types);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [authToken]);

  return (
    <View style={AllStyles.container}>
      <ImageBackground
        source={require('../../assets/images/bg/main-bg.png')}
        style={IntroStyle.LoginScreenBGImage}>
        <View style={AllStyles.Overlay}>
          <View style={AllStyles.TopBar}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={AllStyles.SiteLogo}
            />
          </View>
          <View style={AllStyles.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            <View style={AllStyles.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  All You Can Have !!
                </Text>
              </View>
              <View style={AllStyles.AllRewardsGrid}>
                {/* <ScrollView> */}
                {rewardTypes.map((key, name) => (
                  <RewardGrid
                    key={name}
                    leftborder="0"
                    bottomborder="1"
                    image={key.name.replace(/\s/g, '')}
                    title={key.name}
                    nav={key.name + 'Reward'}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
