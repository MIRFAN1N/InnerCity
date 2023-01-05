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
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });

    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });

    if (authToken && userId) {
      axios
        .get(Constant.TEST_API_URL + 'movie-reward/list/' + userId, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(res => {
          console.log(res);
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
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={QuoteStyle.QuoteRow}>
              <View style={QuoteStyle.QuoteCol}>
                <Text style={QuoteStyle.NewsTitle}>Harlem Nights</Text>
                <Text style={MovieStyle.MovieTitle}>
                  Harlem Nights Harlem Nights Harlem Nights Harlem Nights Harlem
                  Nights Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                  Harlem Nights Harlem Nights Harlem Nights Harlem Nights Harlem
                  Nights
                </Text>
              </View>
            </TouchableOpacity>
          </View>

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
                  <Text style={NewsStyle.ModelTitle}>Harlem Nights</Text>

                  <ScrollView>
                    <Text style={NewsStyle.MovieTitle}>
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                      Harlem Nights Harlem Nights Harlem Nights Harlem Nights
                    </Text>
                  </ScrollView>
                </View>
              </ImageBackground>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};
