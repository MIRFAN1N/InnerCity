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
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    console.log(authToken);

    if (authToken) {
      axios
        .get(Constant.TEST_API_URL + 'reward-type', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(function (response) {
          setLoading(false);
          const data = response.data.data;
          const types = data.types;
          const games = data.games;
          setRewardTypes(types);
          setAllGames(games);
        })
        .catch(function (err) {
          AsyncStorage.removeItem('Token');
          console.log(err);
        });
    }

    // axios
    //   .get(Constant.TEST_API_URL + 'game', {
    //     headers: {
    //       Authorization: `Bearer ${authToken}`,
    //     },
    //   })
    //   .then(function (response) {
    //     setLoading(false);
    //     const data = response.data.data;
    //     const games = data.games;
    //     setAllGames(games);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }, [authToken]);

  return (
    <View style={AllStyles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={AllStyles.Indicator}
          visible={loading}
          color="#000"
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
          <View style={AllStyles.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            <View style={AllStyles.MainAllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  All You Can Have !!
                </Text>
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
                        name.play_able !== 0 && name.played === 0
                          ? navigation.navigate('Game', {
                              id: name.id,
                              name: name.name,
                              primaryimage: name.primary_image,
                              secondaryimage: name.secondary_image,
                              video: name.video,
                              nav: name.name.replace(/\s/g, ''),
                            })
                          : name.play_able !== 0 && name.played !== 0
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
