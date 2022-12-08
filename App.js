import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainNavigationTabs} from './lib/util/navigation/Tabs';
import {createStackNavigator} from '@react-navigation/stack';
// import { } from './lib/screens/Intro';
import {AppIntro} from './lib/screens/Intro';
import {
  IntroScreen,
  HomeScreen,
  WelcomeScreen,
  RegisterScreen,
  LoginScreen,
  ProfileScreen,
  GamesScreen,
} from './lib/screens/Test/Main';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tabs = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={MainNavigatorOpt}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={MainNavigatorOpt}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Games" component={GamesScreen} />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={MainNavigatorOpt}>
        <Tabs.Screen
          name="Intro"
          component={AppIntro}
          options={{tabBarVisible: false, tabBarButton: props => null}}
        />
        <Tabs.Screen
          name="Main"
          component={MainStackScreen}
          options={{tabBarVisible: false, tabBarButton: props => null}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export const MainNavigatorOpt = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: BottomTabStyle,
};

export const BottomTabStyle = [
  {
    backgroundColor: '#000',
  },
];

export default App;
