import React, {useState} from 'react';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {View} from 'react-native';
import Video from 'react-native-video';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import Sound from 'react-native-sound';
import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';
import Constant from '../../util/constant/Constant';

export const GameVideo = (props, route) => {
  const navigation = useNavigation();

  const {id} = props.route.params;
  const {name} = props.route.params;
  const {secondaryimage} = props.route.params;
  const {video} = props.route.params;

  console.log(id + ' ' + name + ' ' + video);

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
              <Video
                source={{uri: Constant.GAME_VIDEO_URL + video}}
                onEnd={GotReward}
                resizeMode="contain"
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
