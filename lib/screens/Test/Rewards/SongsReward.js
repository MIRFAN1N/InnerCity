import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  ProfileStyles,
  RewardTopBar,
  SongStyle,
} from '../../../util/styles/Theme';
import Song from './Song';
import TopBar from './TopBar';

export const SongsReward = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [song, setSong] = useState([]);
  const [playSong, setPlaySong] = useState(false);

  const StartSong = () => {
    setPlaySong(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    if (authToken && userId) {
      axios
        .post(
          Constant.LIVE_API_URL + 'reward/list',
          {
            reward_type: 'Song',
            table: 'songs',
            user_id: userId,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        )
        .then(res => {
          const data = res.data.data;
          const reward = data.rewards;
          setSong(reward);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [authToken, userId]);

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
            <ScrollView>
              {song.map((name, index) => (
                <Song key={index} name={name} index={index} start={StartSong} />
              ))}
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
