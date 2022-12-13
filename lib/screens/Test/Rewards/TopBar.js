import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ProfileStyles} from '../../../util/styles/Theme';

const TopBar = props => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyles.TopBarOuter}>
      <View style={ProfileStyles.TopBarSides}>
        <View style={ProfileStyles.TopBarLeft}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                // navigation.navigate('Home', {name: 'Jane'});
              }}>
              <Image
                source={require('../../../assets/images/icons/back-arrow.png')}
                style={ProfileStyles.TopBarIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={ProfileStyles.TopBarTextOuter}>
            <Text style={ProfileStyles.TopBarText}>{props.Title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
