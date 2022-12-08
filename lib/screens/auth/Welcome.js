import React from "react";
import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import {IntroStyle} from '../../util/styles/Theme';

export const WelcomeScreen = () => {
    return(
        <View style={IntroStyle.WelcomeScreen}>
            <View>
                {/* Welcome Banner */}
                <View style={IntroStyle.WelcomeBanner}>
                    <Image source={require('../../assets/images/bg/welcome.png')} style={IntroStyle.WelcomeBannerImage}/>
                </View>
                {/* Welcome Content */}
                {/* <View> */}
                    <SafeAreaView>
                    <ScrollView style={IntroStyle.WelcomeContent} vertical={true}>
                    <View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentTitle}>Welcome to Inner City</Text>
                            </View>
                            <View>
                                <Text style={IntroStyle.WelcomeContentSubTitle}>We are here to listen to you, Come & Win new Prizes on every game</Text>
                            </View>
                        </View>
                        {/* Buttons */}
                        <View>
                            
                        </View>
                        {/* Bottom Text */}
                        <View>
                            <Text style={IntroStyle.WelcomeContentText}>By continuing, you agree to the Inner City Term & Condition</Text>
                        </View>
                        </View>
                    </ScrollView>
                    </SafeAreaView>
            </View>
        </View>
    );
}