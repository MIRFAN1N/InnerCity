import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Customized} from '../../util/styles/Theme';
// Vars
const NavBG = require('../../assets/images/bg/bottom-bg.png');
const ProfileNav = require('../../assets/images/icons/profile-nav.png');
const HomeNav = require('../../assets/images/icons/home-nav.png');
const GameNav = require('../../assets/images/icons/game-nav.png');

export const BottomNavigation = prop => {
  const navigation = useNavigation();
  return (
    <View style={Customized.BottomNavOuter}>
      <View style={Customized.BottomNavOuter}>
        <Image source={NavBG} style={Customized.BottomNavBG} />
      </View>
      <View style={Customized.BottomNavInner}>
        <View style={Customized.BottomNavGrid}>
          <View style={Customized.BottomNavCol}>
            <View style={Customized.BottomNavColInner}>
              <TouchableOpacity
                style={Customized.BottomNavColLink}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Image
                  source={ProfileNav}
                  style={[Customized.BottomNavIcon, Customized.PaddingLeft]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Customized.BottomNavCol}>
            <View style={Customized.BottomNavColInner}>
              <TouchableOpacity
                style={Customized.BottomNavColLink}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Image
                  source={HomeNav}
                  style={Customized.BottomNavIconCenter}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Customized.BottomNavCol}>
            <View style={Customized.BottomNavColInner}>
              <TouchableOpacity
                style={Customized.BottomNavColLink}
                onPress={() => {
                  navigation.navigate('Games');
                }}>
                <Image source={GameNav} style={Customized.BottomNavIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
