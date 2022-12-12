import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BottomNavigation} from '../../../util/navigation/BottomNavigation';
import {AllStyles, ProfileStyles} from '../../../util/styles/Theme';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyles.TopBarOuter}>
      <View style={ProfileStyles.TopBarSides}>
        <View style={ProfileStyles.TopBarLeft}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {name: 'Jane'});
              }}>
              <Image
                source={require('../../../assets/images/icons/back-arrow.png')}
                style={ProfileStyles.TopBarIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={ProfileStyles.TopBarTextOuter}>
            <Text style={ProfileStyles.TopBarText}>My Songs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const SongsReward = ({navigation}) => {
  return (
    <View style={AllStyles.container}>
      <Image
        source={require('../../../assets/images/bg/profile-bg.png')}
        style={AllStyles.MainBoxBG}
      />
      <View style={AllStyles.Overlay}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar />
        </View>
      </View>
    </View>
  );
};
