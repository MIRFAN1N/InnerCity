import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AllStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';

export const ImageIcons = {
  songs: require('../../assets/images/icons/songs-reward.png'),
  movies: require('../../assets/images/icons/movies-reward.png'),
  books: require('../../assets/images/icons/book-reward.png'),
  news: require('../../assets/images/icons/news-reward.png'),
  quotes: require('../../assets/images/icons/quotes-reward.png'),
  commingsoon: require('../../assets/images/icons/coming-soon-reward.png'),
};

const TopBar = () => {
  <View style={AllStyles.TopBar}>
    {/* <Image source={this.Logo} style={AllStyles.SiteLogo}/> */}
  </View>;
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
            navigation.navigate('Games', {name: 'Jane'});
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

export const HomeScreen = ({navigation}) => {
  return (
    <View style={AllStyles.container}>
      <ImageBackground
        source={require('../../assets/images/bg/main-bg.png')}
        style={AllStyles.LoginScreenBGImage}>
        {/* <ImageBackground source={require('../../assets/images/bg/main-bg.png')} resizeMode="cover" style={AllStyles.image}> */}
        <View style={AllStyles.Overlay}>
          <View style={AllStyles.TopBar}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={AllStyles.SiteLogo}
            />
          </View>
          <View style={AllStyles.AllRewardsOuter}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={AllStyles.InnerBoxBG}
            />
            {/* <ImageBackground source={require('../../assets/images/bg/modal-bg.png')} style={AllStyles.InnerBoxBG}> */}
            <View style={AllStyles.AllRewardsInner}>
              <View style={AllStyles.RewardTopBar}>
                <Text style={AllStyles.RewardTopBarTitle}>
                  All You Can Have !!
                </Text>
              </View>
              <View style={AllStyles.AllRewardsGrid}>
                <RewardGrid
                  leftborder="1"
                  bottomborder="1"
                  image="songs"
                  title="Songs"
                  nav={navigation}
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="1"
                  image="movies"
                  title="Movies"
                />
                <RewardGrid
                  leftborder="1"
                  bottomborder="1"
                  image="books"
                  title="Books"
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="1"
                  image="quotes"
                  title="Quotes"
                />
                <RewardGrid
                  leftborder="1"
                  bottomborder="0"
                  image="news"
                  title="News"
                />
                <RewardGrid
                  leftborder="0"
                  bottomborder="0"
                  image="commingsoon"
                  title="Coming Soon"
                />
              </View>
            </View>
            {/* </ImageBackground> */}
          </View>
        </View>
      </ImageBackground>
      {/* </ImageBackground> */}
      <Image
        source={require('../../assets/images/bg/bottom-bg.png')}
        style={AllStyles.BottomNavBG}
      />
    </View>
  );
};
