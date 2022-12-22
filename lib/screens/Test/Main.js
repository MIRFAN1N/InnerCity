import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
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
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, IntroStyle} from '../../util/styles/Theme';
import {RewardGrid} from './RewardGrid';

export const HomeScreen = () => {
  const [authToken, setAuthToken] = useState();
  const [rewardTypes, setRewardTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allGames, setAllGames] = useState([]);
  const navigation = useNavigation();
  const GameImages = {
    PaperFortuneTeller: require('../../assets/images/games/PaperFortuneGame.png'),
    SlotMachine: require('../../assets/images/games/SlotMachineGame.png'),
    ScratchLottery: require('../../assets/images/games/ScratchTheLotteryGame.png'),
    RollDice: require('../../assets/images/games/RollTheDiceGame.png'),
  };

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    console.log(authToken);

    axios
      .get('https://hungry-kepler.3-84-15-23.plesk.page/api/reward-type', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        const data = response.data.data;
        const types = data.types;
        setRewardTypes(types);
      })
      .catch(function (err) {
        console.log(err);
      });

    axios
      .get('https://hungry-kepler.3-84-15-23.plesk.page/api/game', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        const data = response.data.data;
        const games = data.games;
        setAllGames(games);
      })
      .catch(function (err) {
        console.log(err);
      });

    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
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
                    image={key.name.replace(/\s/g, '')}
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
                        navigation.navigate('Game', {
                          id: name.id,
                          name: name.name.replace(/\s/g, ''),
                          nav: name.name.replace(/\s/g, ''),
                        });
                      }}>
                      <Image
                        source={GameImages[name.name.replace(/\s/g, '')]}
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
