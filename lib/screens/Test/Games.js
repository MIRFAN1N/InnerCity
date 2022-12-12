import {Link} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {AllStyles, GamesStyle, IntroStyle} from '../../util/styles/Theme';

export const GameTab = prop => {
  return (
    <Link to={{screen: 'Register'}} style={GamesStyle.GameTabs}>
      <TouchableOpacity style={GamesStyle.GameTabInner}>
        <View style={GamesStyle.GameTabImgOuter}>
          <Image
            source={require('../../assets/images/games/PaperFortune.png')}
            style={GamesStyle.GameTabImg}
          />
        </View>
        <Text style={GamesStyle.GameTabImgText}>{prop.Name}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export const GamesScreen = ({navigation}) => {
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
                <GameTab Name="Paper Fortuner Teller" />
                <GameTab Name="Slot Machine" />
                <GameTab />
                <GameTab />
                <GameTab />
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
