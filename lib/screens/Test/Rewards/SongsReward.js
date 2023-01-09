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
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  ProfileStyles,
  RewardTopBar,
  SongStyle,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const SongsReward = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [song, setSong] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    if (authToken && userId) {
      axios
        .get(Constant.LIVE_API_URL + 'song-reward/list/' + userId, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
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
                <TouchableOpacity style={SongStyle.SongPlayrow} key={index}>
                  <View style={SongStyle.SongPlayBtn}>
                    <Text style={SongStyle.SongPlayText}>{name.id}</Text>
                  </View>
                  <View style={SongStyle.SongDetails}>
                    <Image
                      source={{uri: Constant.SONGS_REWARD_URL + name.thumbnail}}
                      style={SongStyle.SongDetailsImg}
                    />
                    <View style={SongStyle.SongDetailsNames}>
                      <Text style={SongStyle.SongDetailsTitle}>
                        {name.name}
                      </Text>
                      <Text style={SongStyle.SongDetailsSinger}>
                        {name.singer}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
