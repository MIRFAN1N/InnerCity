import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, IntroStyle, RewardStyle} from '../../util/styles/Theme';

export const RewardScreen = (props, route) => {
  const {id} = props.route.params;
  const {name} = props.route.params;

  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });
  }, [userId]);

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

                <Text style={RewardStyle.PrizeName}>
                  You just won a of the day !!
                </Text>

                <Text style={RewardStyle.PrizeAnnouce}>
                  Just win by Waqar Ali
                </Text>
              </View>

              {/* <Video
                source={videos}
                paused={false}
                style={GameStyle.backgroundVideo}
                repeat={true}
              /> */}
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
