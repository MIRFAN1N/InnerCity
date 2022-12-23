import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
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
            source={require('../../../assets/images/bg/song-bg-02.png')}
            style={SongStyle.SecondaryBgImage}
            imageStyle={{opacity: 0.8}}>
            <TouchableOpacity style={SongStyle.SongPlayrow}>
              <View style={SongStyle.SongPlayBtn}>
                <Text style={SongStyle.SongPlayText}>01</Text>
              </View>
              <View style={SongStyle.SongDetails}>
                <Image
                  source={require('../../../assets/images/games/MySongs1.png')}
                  style={SongStyle.SongDetailsImg}
                />
                <View style={SongStyle.SongDetailsNames}>
                  <Text style={SongStyle.SongDetailsTitle}>
                    I ain't Perfect by Mozzy
                  </Text>
                  <Text style={SongStyle.SongDetailsSinger}>Mozzy</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
