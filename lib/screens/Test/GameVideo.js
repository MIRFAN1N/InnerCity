import React, {useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {View} from 'react-native';
import Video from 'react-native-video';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';
import Constant from '../../util/constant/Constant';

export const GameVideo = (props, route) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const {id} = props.route.params;
  const {name} = props.route.params;
  const {video} = props.route.params;
  const {gameId} = props.route.params;
  const {rewardRowId} = props.route.params;
  console.log(rewardRowId, gameId);

  const StartVideo = () => {
    setLoading(false);
  };

  const GotReward = () => {
    navigation.navigate('Reward', {
      id: id,
      name: name,
      gameId: gameId,
      rewardRowId: rewardRowId,
    });
  };

  return (
    <View style={AllStyles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={AllStyles.Indicator}
          visible={loading}
          color="#DD6B25"
        />
      ) : (
        ''
      )}
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
            <View style={GameStyle.AllRewardsInnerVideo}>
              <Video
                onLoad={StartVideo}
                source={{uri: Constant.GAME_VIDEO_URL + video}}
                // source={require('../../assets/images/videos/SlotTest.mp4')}
                onEnd={GotReward}
                resizeMode="contain"
                style={GameStyle.RewardGameVideo}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* <BottomNavigation /> */}
    </View>
  );
};
