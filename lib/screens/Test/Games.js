import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, GamesStyle, IntroStyle} from '../../util/styles/Theme';

export const GamesScreen = () => {
  const [allGames, setAllGames] = useState([]);
  const [authToken, setAuthToken] = useState();

  AsyncStorage.getItem('Token').then(value => {
    setAuthToken(value);
  });

  console.log(authToken);
  axios
    .get('http://10.0.2.2:8000/api/game', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then(function (response) {
      const data = response.data.data;
      const games = data.games;
      setAllGames(games);
    })
    .catch(function (err) {
      console.log(err);
    });

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
          <View style={GamesStyle.GamesAllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            <View style={AllStyles.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  Pick your favourite game for today!!
                </Text>
              </View>
              <ScrollView style={GamesStyle.GamesAllRewardsGrid}>
                {allGames.map((name, key) => (
                  <GameTab
                    key={key}
                    Name={name.name}
                    Img={name.name.replace(/\s/g, '')}
                    Nav={name.name.replace(/\s/g, '')}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};

export const GameTab = prop => {
  const navigation = useNavigation();
  const GameImages = {
    PaperFortune: require('../../assets/images/games/PaperFortuneTeller.png'),
    SlotMachine: require('../../assets/images/games/SlotMachine.png'),
    ScratchLottery: require('../../assets/images/games/ScratchLottery.png'),
    RollDice: require('../../assets/images/games/RollDice.png'),
  };

  return (
    <View style={GamesStyle.GameTabs}>
      <TouchableOpacity
        style={GamesStyle.GameTabInner}
        onPress={() => {
          navigation.navigate('Game', {
            params: {
              name: prop.Name,
              key: prop.key,
              Img: prop.Img,
            },
          });
        }}>
        <View style={GamesStyle.GameTabImgOuter}>
          <Image source={GameImages[prop.Img]} style={GamesStyle.GameTabImg} />
        </View>
        <Text style={GamesStyle.GameTabImgText}>{prop.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};
