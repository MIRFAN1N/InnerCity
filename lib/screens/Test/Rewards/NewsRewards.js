import React from 'react';
import {View, Text} from 'react-native';
import {AllStyles, MovieStyle, ProfileStyles} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const NewsReward = () => {
  return (
    <View style={AllStyles.container}>
      <View style={MovieStyle.MainBoxBG}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="News" />
          {/* <View style={BookStyle.BooksBody}>
            <View style={QuoteStyle.QuoteRow}>
              <View style={QuoteStyle.QuoteCol}>
                <Text style={MovieStyle.MovieTitle}>
                  Harlem Nights Harlem Nights Harlem Nights Harlem Nights Harlem
                  Nights Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                  Harlem Nights Harlem Nights Harlem Nights Harlem Nights Harlem
                  Nights
                </Text>
                <Text style={QuoteStyle.QuoteAuthor}>Harlem Nights</Text>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};
