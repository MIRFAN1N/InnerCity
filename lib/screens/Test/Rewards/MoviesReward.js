import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Image, Text, Modal, Alert, TouchableOpacity} from 'react-native';
import Constant from '../../../util/constant/Constant';
import {
  AllStyles,
  ModalStyle,
  MovieStyle,
  ProfileStyles,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const MoviesReward = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [movie, setMovie] = useState([]);

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
            reward_type: 'Movie',
            table: 'movies',
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
          setMovie(reward);
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
          <TopBar Title="Movies" />
          <View style={MovieStyle.MovieBody}>
            <View style={MovieStyle.MovieRow}>
              {movie.map((name, index) => (
                <TouchableOpacity
                  style={MovieStyle.MovieCol}
                  onPress={() => {
                    setModalVisible(true);
                    setModalData(name);
                  }}
                  key={index}>
                  <Image
                    source={{uri: Constant.MOVIES_REWARD_URL + name.thumbnail}}
                    style={MovieStyle.MovieImg}
                  />
                  <Text style={MovieStyle.MovieTitle}>{name.name}</Text>
                  <Text style={MovieStyle.MovieYear}>({name.relase_year})</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {modalData ? (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={ModalStyle.centeredView}>
                <View style={ModalStyle.modalView}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      source={require('../../../assets/images/icons/back-arrow.png')}
                      style={ModalStyle.TopBarIcon}
                    />
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: Constant.MOVIES_REWARD_URL + modalData.thumbnail,
                    }}
                    style={ModalStyle.MovieImg}
                  />
                  <Text style={ModalStyle.ModelTitle}>{modalData.name}</Text>

                  <Text style={ModalStyle.ModelCategory}>
                    {modalData.relase_year}
                  </Text>

                  <View style={ModalStyle.MovieDetails}>
                    <Text style={ModalStyle.MovieDetailsTitle}>Director:</Text>
                    <Text style={ModalStyle.MovieDetail}>
                      {modalData.director}
                    </Text>
                  </View>

                  <View style={ModalStyle.MovieDetails}>
                    <Text style={ModalStyle.MovieDetailsTitle}>Writer:</Text>
                    <Text style={ModalStyle.MovieDetail}>
                      {modalData.writer}
                    </Text>
                  </View>

                  <View style={ModalStyle.MovieDetails}>
                    <Text style={ModalStyle.MovieDetailsTitle}>Duration:</Text>
                    <Text style={ModalStyle.MovieDetail}>
                      {modalData.duration}
                    </Text>
                  </View>

                  <View style={ModalStyle.MovieDetails}>
                    <Text style={ModalStyle.MovieDetailsTitle}>Rating:</Text>
                    <Text style={ModalStyle.MovieDetail}>
                      {modalData.rating}
                    </Text>
                  </View>
                </View>
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
