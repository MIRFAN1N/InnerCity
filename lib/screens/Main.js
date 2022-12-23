import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigationTabs} from './../util/navigation/Tabs';

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
