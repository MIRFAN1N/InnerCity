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

export const GameScreen = (props, route) => {
  const navigation = useNavigation();

  const GameVideos = {
    PaperFortuneTeller: require('../../assets/images/videos/PaperFortuneTeller.mp4'),
    SlotMachine: require('../../assets/images/videos/SlotMachine.mp4'),
    ScratchLottery: require('../../assets/images/videos/ScratchLottery.mp4'),
    RollDice: require('../../assets/images/videos/RollDice.mp4'),
  };

  const {id} = props.route.params;
  const {name} = props.route.params;
  const {nav} = props.route.params;

  const GotReward = () => {
    navigation.navigate('Reward', {
      id: id,
      name: name,
    });
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
          <View style={GameStyle.AllRewardsOuterGame}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={RewardStyle.InnerBoxBG}
            />
            <View style={GameStyle.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  Are you Ready to play?
                </Text>
                <Text style={GameStyle.RewardGameTitle}>{name}</Text>
              </View>

              <Video
                source={GameVideos[nav]}
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
