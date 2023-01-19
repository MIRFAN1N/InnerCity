import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  BookStyle,
  MovieStyle,
  ProfileStyles,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const BooksReward = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [book, setBook] = useState([]);

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
            reward_type: 'Book',
            table: 'books',
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
          setBook(reward);
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
          <TopBar Title="Books" />
          <ScrollView style={BookStyle.BooksBody}>
            {/* <Text style={BookStyle.BooksHeading}>Popular Now</Text> */}
            <View style={BookStyle.BooksRow}>
              {book.map((name, index) => (
                <TouchableOpacity style={BookStyle.BooksCol} key={index}>
                  <Image
                    source={{uri: Constant.BOOKS_REWARD_URL + name.thumbnail}}
                    style={BookStyle.BooksImg}
                  />
                  <Text style={MovieStyle.BookTitle}>{name.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* <Text style={BookStyle.BooksHeading}>Trending Now</Text>
            <Text style={BookStyle.BooksHeading}>Recently Read</Text> */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
