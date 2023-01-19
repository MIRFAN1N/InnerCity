import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  BookStyle,
  MovieStyle,
  ProfileStyles,
  QuoteStyle,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const QuotesReward = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    const getDate = () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
      let yyyy = today.getFullYear();

      return `${yyyy}-${mm}-${dd}`;
    };

    if (authToken && userId) {
      axios
        .post(
          Constant.LIVE_API_URL + 'reward/list',
          {
            reward_type: 'Quote',
            table: 'quotes',
            user_id: userId,
            date: getDate(),
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        )
        .then(res => {
          const data = res.data.data;
          const reward = data.rewards;
          setQuote(reward);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [authToken, userId]);
  return (
    <View style={AllStyles.container}>
      <View style={MovieStyle.MainBoxBG}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="Quotes" />
          <View style={BookStyle.BooksBody}>
            <View style={QuoteStyle.QuoteRow}>
              {quote.map((name, index) => (
                <View style={QuoteStyle.QuoteCol} key={index}>
                  <Text style={MovieStyle.MovieTitle}>{name.text}</Text>
                  <Text style={QuoteStyle.QuoteAuthor}>{name.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
