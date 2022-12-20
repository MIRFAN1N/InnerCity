import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, GamesStyle, IntroStyle} from '../../util/styles/Theme';

export const GamesScreen = () => {
  const [allGames, setAllGames] = useState([]);
  const [authToken, setAuthToken] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
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
  }, [authToken]);

  return (
    <View style={AllStyles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          visible={loading}
          style={AllStyles.Indicator}
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
                    id={name.id}
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

export const GameTab = props => {
  const navigation = useNavigation();
  const GameImages = {
    PaperFortuneTeller: require('../../assets/images/games/PaperFortuneTeller.png'),
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
            id: props.id,
            name: props.Name,
            nav: props.Nav,
          });
        }}>
        <View style={GamesStyle.GameTabImgOuter}>
          <Image source={GameImages[props.Img]} style={GamesStyle.GameTabImg} />
        </View>
        <Text style={GamesStyle.GameTabImgText}>{props.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};
