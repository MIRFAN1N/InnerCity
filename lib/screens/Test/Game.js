import React from 'react';
import {Image} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import Constant from '../../util/constant/Constant';

import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';
import Sound from 'react-native-sound';

export const GameScreen = (props, route) => {
  const navigation = useNavigation();

  const {id} = props.route.params;
  const {name} = props.route.params;
  const {secondaryimage} = props.route.params;
  const {video} = props.route.params;

  Sound.setCategory('Playback');
  var sound1 = new Sound(
    require('../../assets/sound/Prolific.mp3'),
    (error, sound) => {
      if (error) {
        console.log('error' + error.message);
        return;
      }

      sound1.play(() => {
        console.log('song playing');
      });
    },
  );

  const PlayGame = () => {
    navigation.navigate('GameVideo', {
      id: id,
      name: name,
      secondaryimage: secondaryimage,
      video: video,
    });

    sound1.stop(() => {
      console.log('song stopped');
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
              <Image
                style={GameStyle.RewardGameSecImage}
                source={{uri: Constant.GAMES_SECONDARY_URL + secondaryimage}}
              />
            </View>
          </View>
          <TouchableOpacity style={GameStyle.PlayButton} onPress={PlayGame}>
            <Text style={GameStyle.PlayButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
