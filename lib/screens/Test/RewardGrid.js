import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AllStyles} from '../../util/styles/Theme';

export const ImageIcons = {
  songs: require('../../assets/images/icons/songs-reward.png'),
  movies: require('../../assets/images/icons/movies-reward.png'),
  books: require('../../assets/images/icons/book-reward.png'),
  news: require('../../assets/images/icons/news-reward.png'),
  quotes: require('../../assets/images/icons/quotes-reward.png'),
  commingsoon: require('../../assets/images/icons/coming-soon-reward.png'),
};

export const RewardGrid = prop => {
  const LeftBorder = parseInt(prop.leftborder);
  const BottomBorder = parseInt(prop.bottomborder);
  var index = prop.image;
  var title = prop.title;
  const navigation = useNavigation();
  return (
    <View style={AllStyles.AllRewardsCol}>
      <View
        style={[
          AllStyles.AllRewardsColInner,
          {borderRightWidth: LeftBorder},
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
