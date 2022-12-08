import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const IntroScreen = ({navigation}) => {
    return(
        <View>
            <Text>
                Intro Screen
            </Text>
            <Button title="Home" onPress={()=> navigation.navigate('Main')}/>
        </View>
    );
}

export const WelcomeScreen = ({navigation}) => {
    return(
        <View>
            <Text>Welcome Screen</Text>
            <Button title="Register" onPress={()=> navigation.navigate('Register')}/>
        </View>
    );
}

export const RegisterScreen = ({navigation}) => {
    return(
        <View>
            <Text>Register Screen</Text>
            <Button title="Login" onPress={()=> navigation.navigate('Login')}/>
        </View>
    );
}

export const LoginScreen = ({navigation}) => {
    return(
        <View>
            <Text>Login Screen</Text>
            <Button title="Welcome" onPress={()=> navigation.navigate('Welcome')}/>
        </View>
    );
}

export const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Home" onPress={()=> navigation.navigate('Home')}/>
            <Button title="Profile" onPress={()=> navigation.navigate('Profile')}/>
            <Button title="Games" onPress={()=> navigation.navigate('Games')}/>
        </View>
    );
}

export const ProfileScreen = ({navigation}) => {
    return(
        <View>
            <Text>Profile Screen</Text>
            <Button title="Home" onPress={()=> navigation.navigate('Home')}/>
            <Button title="Profile" onPress={()=> navigation.navigate('Profile')}/>
            <Button title="Games" onPress={()=> navigation.navigate('Games')}/>
        </View>
    );
}

export const GamesScreen = ({navigation}) => {
    return(
        <View>
            <Text>Games Screen</Text>
            <Button title="Home" onPress={()=> navigation.navigate('Home')}/>
            <Button title="Profile" onPress={()=> navigation.navigate('Profile')}/>
            <Button title="Games" onPress={()=> navigation.navigate('Games')}/>
        </View>
    );
}