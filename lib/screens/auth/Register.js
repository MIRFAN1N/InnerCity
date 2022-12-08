import React from "react";
import {Text, View, TouchableOpacity, Image, TextInput, Button,Alert } from 'react-native';
import {IntroStyle} from '../../util/styles/Theme';

export const RegisterScreen = () => {
    return(
        <View style={IntroStyle.LoginScreen}>
            <View>
                {/* Background Image */}
                <View style={IntroStyle.LoginScreenBG}>
                    <Image source={require('../../assets/images/bg/register.png')}  style={IntroStyle.LoginScreenBGImage}/>
                </View>
                {/* APP Logo */}
                <View style={IntroStyle.RegisterLogoOuter}>
                    <Image source={require('../../assets/images/logo.png')} style={IntroStyle.RegisterAPPLogo}/>
                </View>
                {/* Register Text */}
                <View>
                    <Text>
                        Welcome!
                    </Text>
                </View>
                {/* Register Bottom Text */}
                
            </View>
        </View>
    );
}