import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ProfileStyles} from '../../util/styles/Theme';

const HomeTopBar = props => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyles.TopBarOuter}>
      <View style={ProfileStyles.TopBarSides}>
        <View style={ProfileStyles.TopBarLeft}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Intro');
            }}
            style={ProfileStyles.TopBarFlex}>
            <View>
              <Image
                source={require('../../assets/images/icons/back-arrow.png')}
                style={ProfileStyles.TopBarIcon}
              />
            </View>
            <View style={ProfileStyles.TopBarTextOuter}>
              <Text style={ProfileStyles.TopBarText}>{props.Title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeTopBar;
