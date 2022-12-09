import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainNavigationTabs} from './../util/navigation/Tabs';

const Tab = createBottomTabNavigator();

export const MainApp = () => {
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
