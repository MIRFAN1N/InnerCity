import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigatorOpt, AllStyles } from '../styles/Theme';
// Screens
import { ProfileScreen } from '../../screens/authorized/Profile';
import { HomeScreen } from '../../screens/authorized/Home';
import { GamesScreen } from '../../screens/authorized/Games';
import { SongsScreen } from '../../screens/authorized/Games';

const Tab = createBottomTabNavigator();


export const MainNavigationTabs = () => {
    return(
        <Tab.Navigator screenOptions={MainNavigatorOpt}>
            <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../assets/images/icons/profile-nav.png')} style={AllStyles.TabIcons}/>
                    ),
                }}
            />
            <Tab.Screen 
                name='Home'
                component={HomeScreen} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../assets/images/icons/home-nav.png')} style={[AllStyles.TabIcons,AllStyles.ActiveTabIcon]}/>
                    ),
                }}
            />
            <Tab.Screen 
                name='Games'
                component={GamesScreen} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../assets/images/icons/game-nav.png')} style={AllStyles.TabIcons} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}