import React from 'react';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import Video from 'react-native-video';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {
  AllStyles,
  GamesStyle,
  GameStyle,
  IntroStyle,
} from '../../util/styles/Theme';

import videos from '../../assets/images/videos/PaperFortuneTeller.mp4';

export const GameScreen = ({navigation}) => {
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
          <View style={GamesStyle.GamesAllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            <View style={AllStyles.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  Are you Ready to play?
                </Text>
                <Text style={GameStyle.RewardGameTitle}>
                  Rock Paper Scissor
                </Text>
              </View>

              <Video
                source={videos}
                paused={false}
                style={GameStyle.backgroundVideo}
                repeat={true}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
