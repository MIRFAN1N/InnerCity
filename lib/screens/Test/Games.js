import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Constant from '../../util/constant/Constant';
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
      .get('https://hungry-kepler.3-84-15-23.plesk.page/api/game/playable', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        const games = response.data.data;
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
                    PrimaryImage={name.primary_image}
                    SecImage={name.secondary_image}
                    Playable={name.play_able}
                    Video={name.video}
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

  return (
    <View style={GamesStyle.GameTabs}>
      <TouchableOpacity
        style={GamesStyle.GameTabInner}
        onPress={() => {
          props.Playable !== 0
            ? navigation.navigate('Game', {
                id: props.id,
                name: props.Name,
                primaryimage: props.PrimaryImage,
                secondaryimage: props.SecImage,
                video: props.Video,
                nav: props.Nav,
              })
            : Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody:
                  'This game is not playable yet. Please try again later.',
                button: 'close',
              });
        }}>
        <View style={GamesStyle.GameTabImgOuter}>
          <Image
            source={{
              uri: Constant.GAMES_PRIMARY_URL + props.PrimaryImage,
            }}
            style={GamesStyle.GameTabImg}
          />
          <View style={GamesStyle.GameOverlayText}>
            <Text style={GamesStyle.GameTabImgText}>{props.Name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
