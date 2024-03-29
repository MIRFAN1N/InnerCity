import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
// import PushNotification from 'react-native-push-notification';
import Constant from '../../util/constant/Constant';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import {RewardGrid} from './RewardGrid';

export const HomeScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [rewardTypes, setRewardTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allGames, setAllGames] = useState([]);
  const navigation = useNavigation();
  const [userId, setUserId] = useState();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit App',
          'Are you Sure, You want to exit the InnerCity?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    // console.log(authToken);
    if (authToken) {
      const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = today.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
      };

      axios
        .post(
          Constant.LIVE_API_URL + 'reward-type/' + userId,
          {
            date: getDate(),
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        )
        .then(function (response) {
          setLoading(false);
          const data = response.data.data;
          const types = data.types;
          const games = data.games;
          setRewardTypes(types);
          setAllGames(games);
        })
        .catch(function (err) {
          if(err.response.status == 401){
            AsyncStorage.removeItem('Token');
          }
          AsyncStorage.removeItem('Token');
        });
    }
  }, [authToken, navigation, userId]);

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
        source={require('../../assets/images/bg/welcome.png')}
        style={IntroStyle.LoginScreenBGImage}>
        <View style={AllStyles.Overlay}>
          <View style={AllStyles.TopBar}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={AllStyles.SiteLogo}
            />
          </View>
          <View style={AllStyles.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            <View style={AllStyles.MainAllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <TouchableOpacity>
                  <Text style={AllStyles.RewardTopBarTitle}>
                    All You Can Have !!
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={AllStyles.AllRewardsGrid}>
                {/* <ScrollView> */}
                {rewardTypes.map((key, name) => (
                  <RewardGrid
                    key={name}
                    Gridkey={name}
                    image={key.icon}
                    title={key.name}
                    nav={key.name + 'Reward'}
                  />
                ))}
                <View style={AllStyles.RewardGridGamesRows}>
                  {allGames.slice(0, 2).map((name, key) => (
                    <TouchableOpacity
                      style={AllStyles.RewardGridGamesCols}
                      key={key}
                      onPress={() => {
                        name.play_able === 1 && name.played === 0
                          ? navigation.navigate('Game', {
                              id: name.id,
                              name: name.name,
                              primaryimage: name.primary_image,
                              secondaryimage: name.secondary_image,
                              gameId: name.id,
                              rewardRowId: name.row_id,
                              video: name.video,
                              nav: name.name.replace(/\s/g, ''),
                            })
                          : name.play_able === 1 && name.played === 1
                          ? Dialog.show({
                              type: ALERT_TYPE.WARNING,
                              title: 'Warning',
                              textBody:
                                'This game is already played. Please try again after 24 hours.',
                              button: 'close',
                            })
                          : Dialog.show({
                              type: ALERT_TYPE.WARNING,
                              title: 'Warning',
                              textBody:
                                'This game is not playable yet. Please try again later.',
                              button: 'close',
                            });
                      }}>
                      <Image
                        source={{
                          uri:
                            Constant.GAMES_SECONDARY_URL + name.primary_image,
                        }}
                        style={AllStyles.RewardGridGamesImg}
                      />
                      <Text style={AllStyles.RewardGridGamesName}>
                        {name.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
