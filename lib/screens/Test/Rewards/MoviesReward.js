import React, {useState} from 'react';
import {View, Image, Text, Modal, Alert, TouchableOpacity} from 'react-native';
import {
  AllStyles,
  ModalStyle,
  MovieStyle,
  ProfileStyles,
} from '../../../util/styles/Theme';
import TopBar from './TopBar';

export const MoviesReward = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={AllStyles.container}>
      <View style={MovieStyle.MainBoxBG}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar Title="Movies" />
          <View style={MovieStyle.MovieBody}>
            <View style={MovieStyle.MovieRow}>
              <TouchableOpacity
                style={MovieStyle.MovieCol}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={MovieStyle.MovieImg}
                />
                <Text style={MovieStyle.MovieTitle}>Harlem Nights</Text>
                <Text style={MovieStyle.MovieYear}>(1998)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={MovieStyle.MovieCol}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={MovieStyle.MovieImg}
                />
                <Text style={MovieStyle.MovieTitle}>Harlem Nights</Text>
                <Text style={MovieStyle.MovieYear}>(1998)</Text>
              </TouchableOpacity>
            </View>
          </View>

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
                  source={require('../../../assets/images/games/Mulan.png')}
                  style={ModalStyle.MovieImg}
                />
                <Text style={ModalStyle.ModelTitle}>Harlem Nights</Text>

                <Text style={ModalStyle.ModelCategory}>Thriller</Text>

                <View style={ModalStyle.MovieDetails}>
                  <Text style={ModalStyle.MovieDetailsTitle}>Director:</Text>
                  <Text style={ModalStyle.MovieDetail}>Eddie Murphy</Text>
                </View>

                <View style={ModalStyle.MovieDetails}>
                  <Text style={ModalStyle.MovieDetailsTitle}>Writer:</Text>
                  <Text style={ModalStyle.MovieDetail}>Eddie Murphy</Text>
                </View>

                <View style={ModalStyle.MovieDetails}>
                  <Text style={ModalStyle.MovieDetailsTitle}>Duration:</Text>
                  <Text style={ModalStyle.MovieDetail}>
                    01 hour 54 minutes(s)
                  </Text>
                </View>

                <View style={ModalStyle.MovieDetails}>
                  <Text style={ModalStyle.MovieDetailsTitle}>Rating:</Text>
                  <Text style={ModalStyle.MovieDetail}>4</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};
