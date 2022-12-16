import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {AllStyles, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DefaultProfiel = require('../../assets/images/default/profile.png');

export const UserData = {
  username: 'Muhammad Irfan5',
  profile:
    'https://iamconnect.com/storage/profile/m.irfan@napollo.net/16650754191660567605astronaut-yoga-meditation-minimal-art-space-artwork-black-3840x2160-8016.jpg',
  // profile : '',
  phone: '+923180688228',
  // phone : '',
  email: 'm.irfan@napollo.net',
  account: {
    google: {
      status: '1',
      key: 'sdfshgkjdfkjvnkjsdfnvj-dfvlkndfvlk',
    },
    status: '1',
    facebook: 'fsdlkfhksdhfknndcbi-554415dfgvdfvd',
  },
};

const ProfileImage = UserData.profile
  ? {uri: UserData.profile}
  : DefaultProfiel;

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyles.TopBarOuter}>
      <View style={ProfileStyles.TopBarSides}>
        <View style={ProfileStyles.TopBarLeft}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {name: 'Jane'});
              }}>
              <Image
                source={require('../../assets/images/icons/back-arrow.png')}
                style={ProfileStyles.TopBarIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={ProfileStyles.TopBarTextOuter}>
            <Text style={ProfileStyles.TopBarText}>My Profile</Text>
          </View>
        </View>
        <View style={ProfileStyles.TopBarRight}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/icons/edit.png')}
                style={ProfileStyles.TopBarIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const UserProfile = prop => {
  const email = prop.email;

  return (
    <View style={ProfileStyles.UserProfileOuter}>
      <View>
        <Image source={ProfileImage} style={ProfileStyles.UserProfileImage} />
      </View>
      <View>
        <Text style={[ProfileStyles.TextColorWhite, ProfileStyles.ProfileText]}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const UserInfo = () => {
  return (
    <View style={ProfileStyles.TextGridOuter}>
      <View style={ProfileStyles.TextGrid}>
        <View style={ProfileStyles.TextGridInnerleft}>
          <Text style={ProfileStyles.TextColorWhite}>Phone : </Text>
        </View>
        <View>
          <Text style={ProfileStyles.TextColorWhite}>
            {UserData.phone !== '' ? UserData.phone : 'Not added!'}
          </Text>
        </View>
      </View>
      <View style={ProfileStyles.TextGrid}>
        <View style={ProfileStyles.TextGridInnerleft}>
          <Text style={ProfileStyles.TextColorWhite}>Email : </Text>
        </View>
        <View>
          <Text style={ProfileStyles.TextColorWhite}>
            {UserData.email !== '' ? UserData.email : 'Not added!'}
          </Text>
        </View>
      </View>
      <View style={ProfileStyles.TextGrid}>
        <View>
          <Text style={ProfileStyles.TextColorWhite}>Linked Accounts : </Text>
        </View>
        <View>
          {/* {UserData.phone != ''  ? UserData.phone : 'Not added!' } */}
        </View>
      </View>
      <View style={ProfileStyles.LogoutOuter}>
        <View style={ProfileStyles.LogoutInner}>
          <TouchableOpacity>
            <Text
              style={[ProfileStyles.TextColorWhite, ProfileStyles.LogoutText]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const ProfileScreen = ({navigation}) => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });
    console.log(typeof userId);
    axios
      .get(
        'http://10.0.2.2:8000/api/user/data',
        {
          params: {
            id: userId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then(function (response) {
        const data = response.data.data;
        const userinfo = data.user_info;
        console.log(userinfo);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [authToken, userId]);

  return (
    <View style={AllStyles.container}>
      <Image
        source={require('../../assets/images/bg/profile-bg.png')}
        style={AllStyles.MainBoxBG}
      />
      <View style={AllStyles.Overlay}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar />
          <UserProfile />
          <UserInfo />
        </View>
      </View>
      <BottomNavigation />
    </View>
  );
};
