import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {
  AllStyles,
  ProfileStyles,
  RewardTopBar,
  SongStyle,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const SongsReward = ({navigation}) => {
  return (
    <View style={AllStyles.container}>
      <Image
        source={require('../../../assets/images/games/MySongs2.png')}
        style={RewardTopBar.MainBoxBG}
      />
      <View style={RewardTopBar.Overlay}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="My Songs" />
          <Image
            source={require('../../../assets/images/games/MySongs1.png')}
            style={SongStyle.HeadImage}
          />
          <ImageBackground
            source={'../../../assets/images/bg/song-bg.jpg'}
            style={SongStyle.SecondaryBgImage}
          />
        </View>
      </View>
    </View>
  );
};
