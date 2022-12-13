import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { } from './lib/screens/Intro';
import {AppIntro} from './lib/screens/Intro';
import {HomeScreen} from './lib/screens/Test/Main';
import {ProfileScreen} from './lib/screens/Test/Profile';
import {GamesScreen} from './lib/screens/Test/Games';
import {GameScreen} from './lib/screens/Test/Game';
import {RewardScreen} from './lib/screens/Test/Reward';
import {SongsReward} from './lib/screens/Test/Rewards/SongsReward';
import {MovieReward} from './lib/screens/Test/Rewards/MovieReward';
import {BooksReward} from './lib/screens/Test/Rewards/BooksReward';
import {QuotesReward} from './lib/screens/Test/Rewards/QuotesReward';

const MainStack = createStackNavigator();
const Tabs = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={MainNavigatorOpt}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="EditProfile" component={ProfileScreen} />
      <MainStack.Screen name="Games" component={GamesScreen} />
      <MainStack.Screen name="Game" component={GameScreen} />
      <MainStack.Screen name="Reward" component={RewardScreen} />
      <MainStack.Screen name="SongsReward" component={SongsReward} />
      <MainStack.Screen name="MovieReward" component={MovieReward} />
      <MainStack.Screen name="BooksReward" component={BooksReward} />
      <MainStack.Screen name="QuotesReward" component={QuotesReward} />
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
