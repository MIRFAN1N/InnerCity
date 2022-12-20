import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AllStyles} from '../../util/styles/Theme';

export const ImageIcons = {
  Songs: require('../../assets/images/icons/songs-reward.png'),
  Movies: require('../../assets/images/icons/movies-reward.png'),
  Books: require('../../assets/images/icons/book-reward.png'),
  News: require('../../assets/images/icons/news-reward.png'),
  Quotes: require('../../assets/images/icons/quotes-reward.png'),
  ComingSoon: require('../../assets/images/icons/coming-soon-reward.png'),
};

export const RewardGrid = prop => {
  const RightBorder = parseInt(prop.RightBorder);
  const BottomBorder = parseInt(prop.bottomborder);
  var index = prop.image;
  var title = prop.title;
  const navigation = useNavigation();
  return (
    <View style={AllStyles.AllRewardsCol}>
      <View
        style={[
          AllStyles.AllRewardsColInner,
          {borderRightWidth: RightBorder},
          {borderBottomWidth: BottomBorder},
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(prop.nav);
          }}>
          <View style={AllStyles.AllRewardsColInnerImage}>
            <Image
              source={ImageIcons[index]}
              style={AllStyles.AllRewardsColInnerImageMain}
            />
          </View>
          <View style={AllStyles.AllRewardsColInnerText}>
            <Text style={AllStyles.AllRewardsColInnerTextMain}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
