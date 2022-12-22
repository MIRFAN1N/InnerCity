import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {AllStyles, ProfileStyles} from '../../util/styles/Theme';
import {useNavigation} from '@react-navigation/native';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DefaultProfiel = require('../../assets/images/default/profile.png');

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyles.TopBarOuter}>
      <View style={ProfileStyles.TopBarSides}>
        <View style={ProfileStyles.TopBarLeft}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Image
                source={require('../../assets/images/icons/edit.png')}
                style={ProfileStyles.TopBarEditIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const UserProfile = props => {
  const email = props.email;
  const profile = props.profile;

  return (
    <View style={ProfileStyles.UserProfileOuter}>
      <View>
        <Image
          source={profile !== null ? profile : DefaultProfiel}
          style={ProfileStyles.UserProfileImage}
        />
      </View>
      <View>
        <Text style={[ProfileStyles.TextColorWhite, ProfileStyles.ProfileText]}>
          {email}
        </Text>
      </View>
    </View>
  );
};

const UserInfo = props => {
  const email = props.email;
  const phone = props.phone;
  const token = props.token;
  const navigation = useNavigation();

  const LogoutUser = () => {
    console.log(token);

    axios
      .get('https://hungry-kepler.3-84-15-23.plesk.page/api/user/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        AsyncStorage.removeItem('Token');
        navigation.navigate('Intro');
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={ProfileStyles.TextGridOuter}>
      <View style={ProfileStyles.TextGrid}>
        <View style={ProfileStyles.TextGridInnerleft}>
          <Text style={ProfileStyles.TextColorWhite}>Phone : </Text>
        </View>
        <View>
          <Text style={ProfileStyles.TextColorWhite}>
            {phone !== null ? phone : 'Not added!'}
          </Text>
        </View>
      </View>
      <View style={ProfileStyles.TextGrid}>
        <View style={ProfileStyles.TextGridInnerleft}>
          <Text style={ProfileStyles.TextColorWhite}>Email : </Text>
        </View>
        <View>
          <Text style={ProfileStyles.TextColorWhite}>
            {email !== '' ? email : 'Not added!'}
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
          <TouchableOpacity onPress={LogoutUser}>
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
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(value => {
      setUserId(value);
    });
    AsyncStorage.getItem('Token').then(value => {
      setAuthToken(value);
    });
    // console.log(parseInt(userId));
    axios
      .get(
        'https://hungry-kepler.3-84-15-23.plesk.page/api/user/data/' +
          userId +
          '',
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then(function (response) {
        const data = response.data.data;
        const userinfo = data.user_info;
        const email = userinfo.email;
        const phone = userinfo.phone;
        const profile = userinfo.profile;
        setLoading(false);
        setUserEmail(email);
        setUserPhone(phone);
        setUserProfile(profile);
        // console.log(email);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [authToken, userId]);

  return (
    <View style={AllStyles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          visible={loading}
          style={AllStyles.Indicator}
          color="#000"
        />
      ) : (
        ''
      )}
      <Image
        source={require('../../assets/images/bg/profile-bg.png')}
        style={AllStyles.MainBoxBG}
      />
      <View style={AllStyles.Overlay}>
        <View style={ProfileStyles.FullWidth}>
          <TopBar />
          <UserProfile id={userId} email={userEmail} profile={userProfile} />
          <UserInfo
            id={userId}
            email={userEmail}
            phone={userPhone}
            token={authToken}
          />
        </View>
      </View>
      <BottomNavigation />
    </View>
  );
};
