import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Constant from '../../util/constant/Constant';
import {AllStyles} from '../../util/styles/Theme';

// export const ImageIcons = {
//   Songs: require('../../assets/images/icons/songs-reward.png'),
//   Movies: require('../../assets/images/icons/movies-reward.png'),
//   Books: require('../../assets/images/icons/book-reward.png'),
//   News: require('../../assets/images/icons/news-reward.png'),
//   Quotes: require('../../assets/images/icons/quotes-reward.png'),
//   ComingSoon: require('../../assets/images/icons/coming-soon-reward.png'),
// };

export const RewardGrid = prop => {
  var RightBorder = 0;
  var BottomBorder = 0;
  var TopBorder = 0;
  var grid_key = parseInt(prop.Gridkey) + 1;
  // if (grid_key <= 3) {
  //   BottomBorder = 1;
  // }

  if (grid_key === 1 || grid_key === 2 || grid_key === 4 || grid_key === 5) {
    RightBorder = 0;
  }

  var Icon = prop.image;
  var title = prop.title;
  const navigation = useNavigation();
  return (
    <View style={AllStyles.AllRewardsCol}>
      <View
        style={[
          AllStyles.AllRewardsColInner,
          {borderRightWidth: RightBorder},
          {borderBottomWidth: BottomBorder},
          {borderTopWidth: TopBorder},
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(prop.nav);
          }}>
          <View style={AllStyles.AllRewardsColInnerImage}>
            <Image
              source={{
                uri: Constant.REWARD_ICON_URL + Icon,
              }}
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
