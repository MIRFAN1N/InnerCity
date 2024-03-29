import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BackHandler, Image, TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import Sound from 'react-native-sound';
import Constant from '../../util/constant/Constant';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';

export const RewardScreen = (props, route) => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [message, setMessage] = useState();
  const [reward, setReward] = useState([]);
  const {gameId} = props.route.params;
  const {rewardRowId} = props.route.params;
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  useEffect(() => {
    Sound.setCategory('Playback');
    var sound1 = new Sound(
      require('../../assets/sound/won-sound.mp3'),
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
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    if (authToken) {
      axios
        .post(
          Constant.LIVE_API_URL + 'game/add-log',
          {
            user_id: userId,
            row_id: rewardRowId,
            game_id: gameId,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        )
        .then(function (response) {
          const data = response.data.data;
          const messages = data.message;
          const rewards = data.reward[0];
          setMessage(messages);
          setReward(rewards);
          // console.log(message);
          // console.log(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }, [userId, authToken]);

  return (
    <View style={AllStyles.container}>
      <ImageBackground
        source={require('../../assets/images/bg/main-bg.png')}
        style={IntroStyle.LoginScreenBGImage}>
        <View style={AllStyles.Overlay}>
          <View style={RewardStyle.PrizeTopBar}>
            <Image
              source={require('../../assets/images/games/PrizeStars.png')}
              style={RewardStyle.PrizeStars}
            />
          </View>
          <View style={RewardStyle.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={RewardStyle.InnerBoxBG}
            />
            <View style={RewardStyle.AllRewardsInner}>
              <View>
                <Text style={RewardStyle.RewardTopBarTitle}>Prize You Get</Text>

                <View style={RewardStyle.PrizeTicketBg}>
                  <ImageBackground
                    source={require('../../assets/images/games/TopPrizeTicket.png')}
                    style={RewardStyle.PrizeTicket}>
                    <Text style={RewardStyle.RewardGameTitle}>Top Price</Text>
                  </ImageBackground>
                </View>

                <Text style={RewardStyle.MainTitle}>Hurrah!!</Text>

                <Text style={RewardStyle.PrizeName}>{message}</Text>

                <Text style={RewardStyle.PrizeAnnouce}>{reward.name}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={GameStyle.PlayButton}
            onPress={() => {
              navigation.push('Main', {
                screen: 'Home',
              });
            }}>
            <Text style={GameStyle.PlayButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* <BottomNavigation /> */}
    </View>
  );
};
