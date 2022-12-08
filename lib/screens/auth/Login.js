import React from "react";
import {Text, View, TouchableOpacity, Image, TextInput, Button,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {IntroStyle} from '../../util/styles/Theme';

export const LoginScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={IntroStyle.LoginScreen}>
            <View>
                {/* Background Image */}
                <View style={IntroStyle.LoginScreenBG}>
                    <Image source={require('../../assets/images/bg/login-bg.png')}  style={IntroStyle.LoginScreenBGImage}/>
                </View>
                {/* APP Logo */}
                <View style={IntroStyle.APPLogoOuter}>
                    <Image source={require('../../assets/images/logo.png')} style={IntroStyle.APPLogo}/>
                </View>
                {/* Login Screen Content */}
                <View style={IntroStyle.LoginContent}>
                    {/* Content Inner */}
                    <View>
                        {/* Form Grid */}
                        <View>
                            {/* Form Grid Inner*/}
                            <View style={IntroStyle.LoginGrid}>
                                {/* Grid Row */}
                                <View style={IntroStyle.LoginGridRow}>
                                    {/* Icon */}
                                    <View style={IntroStyle.FieldIcon}>
                                        <Image source={require('../../assets/images/icons/user.png')} style={IntroStyle.FieldIconImage}/>
                                    </View>
                                    {/* Input */}
                                    <View style={IntroStyle.FieldInput}>
                                        <TextInput style={IntroStyle.FormField} placeholder="Your Email"/>
                                    </View>
                                </View>
                                {/* Grid Row */}
                                <View style={IntroStyle.LoginGridRow}>
                                    {/* Icon */}
                                    <View style={IntroStyle.FieldIcon}>
                                        <Image source={require('../../assets/images/icons/password.png')} style={IntroStyle.FieldIconImage}/>
                                    </View>
                                    {/* Input */}
                                    <View style={IntroStyle.FieldInput}>
                                        <TextInput style={IntroStyle.FormField} placeholder="Password"/>
                                    </View>
                                </View>
                                {/* Grid Row */}
                                <View style={IntroStyle.LoginGridRow}>
                                    {/* Forgot Link */}
                                    <View style={IntroStyle.LoginGridRowText}>
                                        <TouchableOpacity style={IntroStyle.LoginGridRowButton}>
                                            <Text style={IntroStyle.FormLink}>Forgot Password ?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Grid Row */}
                                <View style={IntroStyle.LoginGridRow}>
                                    {/* Loggin Button */}
                                    <View style={IntroStyle.LoginButtonOuter}>
                                        <Button title="Login" buttonStyle={IntroStyle.LoginButton} color={"#DD6D25"} textStyle={IntroStyle.LoginButtonText} onPress={()=>navigation.navigate('Main')}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}