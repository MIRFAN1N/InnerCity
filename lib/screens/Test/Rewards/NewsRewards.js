import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  BookStyle,
  ModalStyle,
  MovieStyle,
  NewsStyle,
  ProfileStyles,
  QuoteStyle,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const NewsReward = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [news, setNews] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    if (authToken && userId) {
      axios
        .post(
          Constant.LIVE_API_URL + 'reward/list',
          {
            reward_type: 'News',
            table: 'news',
            user_id: userId,
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
          setNews(reward);
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
          <TopBar Title="News" />
          <View style={BookStyle.BooksBody}>
            {news.map((name, index) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setModalData(name);
                }}
                style={QuoteStyle.QuoteRow}
                key={index}>
                <View style={QuoteStyle.QuoteCol}>
                  <Text style={QuoteStyle.NewsTitle}>
                    {name.name.length > 5
                      ? name.name.substring(0, 25 - 3) + '...'
                      : name.name}
                  </Text>
                  <Text style={MovieStyle.MovieTitle}>
                    {name.description.length > 5
                      ? name.description.substring(0, 250 - 3) + '...'
                      : name.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {modalData ? (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
              style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <View style={ModalStyle.centeredView}>
                <ImageBackground
                  source={require('../../../assets/images/bg/news.png')}
                  style={NewsStyle.modalView}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={NewsStyle.TopBarbg}>
                    <Image
                      source={require('../../../assets/images/icons/close-arrow.png')}
                      style={NewsStyle.TopBarIcon}
                    />
                  </TouchableOpacity>
                  <View style={NewsStyle.MovieImg}>
                    <Text style={NewsStyle.ModelTitle}>{modalData.name}</Text>

                    <ScrollView>
                      <Text style={NewsStyle.MovieTitle}>
                        {modalData.description}
                      </Text>
                    </ScrollView>
                  </View>
                </ImageBackground>
              </View>
            </Modal>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
};
