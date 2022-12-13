import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text, View} from 'react-native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {AllStyles, GamesStyle, IntroStyle} from '../../util/styles/Theme';

export const GameTab = prop => {
  const navigation = useNavigation();
  const GameImages = {
    PaperFortune: require('../../assets/images/games/PaperFortune.png'),
    SlotMachine: require('../../assets/images/games/SlotMachine.png'),
    ScratchLottery: require('../../assets/images/games/ScratchLottery.png'),
    RollDice: require('../../assets/images/games/RollDice.png'),
  };

  return (
    <View style={GamesStyle.GameTabs}>
      <TouchableOpacity
        style={GamesStyle.GameTabInner}
        onPress={() => {
          navigation.navigate('Game');
        }}>
        <View style={GamesStyle.GameTabImgOuter}>
          <Image source={GameImages[prop.Img]} style={GamesStyle.GameTabImg} />
        </View>
        <Text style={GamesStyle.GameTabImgText}>{prop.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const GamesScreen = () => {
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
                <GameTab Name="Paper Fortuner Teller" Img="PaperFortune" />
                <GameTab Name="Slot Machine" Img="SlotMachine" />
                <GameTab Name="Scratch Lottery" Img="ScratchLottery" />
                <GameTab Name="Roll Dice" Img="RollDice" />
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
