import React from 'react';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import Video from 'react-native-video';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';

import {useNavigation} from '@react-navigation/native';

export const GameScreen = () => {
  const navigation = useNavigation();

  const GotReward = () => {
    navigation.navigate('Reward');
  };

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
          <View style={GameStyle.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={RewardStyle.InnerBoxBG}
            />
            <View style={GameStyle.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  Are you Ready to play?
                </Text>
                <Text style={GameStyle.RewardGameTitle}>
                  Rock Paper Scissor
                </Text>
              </View>

              <Video
                source={require('../../assets/images/videos/PaperFortuneTeller.mp4')}
                paused={false}
                onEnd={GotReward}
                style={GameStyle.RewardGameVideo}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
