import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import {RewardGrid} from './RewardGrid';

export const HomeScreen = ({route, navigation}) => {
  const {tokens} = AsyncStorage.getItem('@Token');
  console.log(tokens);

  axios
    .get('http://10.0.2.2:8000/api/reward-type', {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });

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
                <RewardGrid
                  leftborder="1"
                  bottomborder="1"
                  image="songs"
                  title="Songs"
                  nav={'SongsReward'}
                  token={tokens}
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="1"
                  image="movies"
                  title="Movies"
                  nav={'MovieReward'}
                />
                <RewardGrid
                  leftborder="1"
                  bottomborder="1"
                  image="books"
                  title="Books"
                  nav={'BooksReward'}
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="1"
                  image="commingsoon"
                  title="Coming Soon"
                />
                <RewardGrid
                  leftborder="1"
                  bottomborder="0"
                  image="quotes"
                  title="Quotes"
                  nav={'QuotesReward'}
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="0"
                  image="news"
                  title="News"
                  nav={'NewsReward'}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
