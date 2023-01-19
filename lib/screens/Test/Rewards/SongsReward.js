import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Sound from 'react-native-sound';
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
  const [selectedId, setSelectedId] = useState();
  const [play, setPlay] = useState(false);
  const [iconImg, setIconImg] = useState(false);
  let Icon = '';

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        SoundPlayer.stop();
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

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
  var ControlIconPlay = require('../../../assets/images/icons/play.png');
  var ControlIconPause = require('../../../assets/images/icons/pause.png');

  const Item = ({item, onPress, PlayIcon}) => (
    <TouchableOpacity style={SongStyle.SongPlayrow} onPress={onPress}>
      <View style={SongStyle.SongPlayBtn}>
        <Image source={PlayIcon} style={SongStyle.SongControlImg} />
      </View>
      <View style={SongStyle.SongDetails}>
        <Image
          source={{uri: Constant.SONGS_REWARD_URL + item.thumbnail}}
          style={SongStyle.SongDetailsImg}
        />
        <View style={SongStyle.SongDetailsNames}>
          <Text style={SongStyle.SongDetailsTitle}>{item.name}</Text>
          <Text style={SongStyle.SongDetailsSinger}>{item.singer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'white' : 'black';
    if (item.id === selectedId && iconImg) {
      console.log('Played-01');
      Icon = ControlIconPause;
    } else {
      Icon = ControlIconPlay;
      console.log('Stoped-01');
      // setIconImg(true);
    }

    const PlaySongs = (songname, id) => {
      try {
        SoundPlayer.loadUrl(Constant.SONG_REWARD_URL + songname.song);
      } catch (e) {
        console.log('cannot play the sound file', e);
      }
      SoundPlayer.play();
      setPlay(true);
      setIconImg(true);
      if (selectedId === item.id) {
        if (play === true) {
          SoundPlayer.stop();
          setPlay(false);
        } else {
          SoundPlayer.play();
        }

        if (iconImg === true) {
          Icon = ControlIconPlay;
          setIconImg(false);
        } else {
          Icon = ControlIconPause;
        }
        // console.log('same');
      }
      setSelectedId(songname.id);
    };

    return (
      <Item
        item={item}
        onPress={() => PlaySongs(item)}
        PlayIcon={Icon}
        textColor={color}
      />
    );
  };

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
            <FlatList
              data={song}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
