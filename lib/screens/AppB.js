import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainNavigationTabs} from './lib/util/navigation/Tabs';
import {createStackNavigator} from '@react-navigation/stack';
// import AppIntro from './lib/screens/Intro';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer style={AllStyles.NoBorder}>
      <MainNavigationTabs />
    </NavigationContainer>
  );
};

export const AllStyles = StyleSheet.create({
  NoBorder: {
    borderWidth: 0,
  },
});

export default App;
