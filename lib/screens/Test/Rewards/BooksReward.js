import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  AllStyles,
  BookStyle,
  MovieStyle,
  ProfileStyles,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const BooksReward = () => {
  return (
    <View style={AllStyles.container}>
      <View style={MovieStyle.MainBoxBG}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="Books" />
          <ScrollView style={BookStyle.BooksBody}>
            <Text style={BookStyle.BooksHeading}>Popular Now</Text>
            <View style={BookStyle.BooksRow}>
              <TouchableOpacity style={BookStyle.BooksCol}>
                <Image
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={BookStyle.BooksImg}
                />
                <Text style={MovieStyle.MovieTitle}>Harlem Nights</Text>
              </TouchableOpacity>
            </View>
            <Text style={BookStyle.BooksHeading}>Trending Now</Text>
            <View style={BookStyle.BooksRow}>
              <TouchableOpacity style={BookStyle.BooksCol}>
                <Image
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={BookStyle.BooksImg}
                />
                <Text style={MovieStyle.MovieTitle}>Harlem Nights</Text>
              </TouchableOpacity>
            </View>
            <Text style={BookStyle.BooksHeading}>Recently Read</Text>
            <View style={BookStyle.BooksRow}>
              <TouchableOpacity style={BookStyle.BooksCol}>
                <Image
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={BookStyle.BooksImg}
                />
                <Text style={MovieStyle.MovieTitle}>Harlem Nights</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
