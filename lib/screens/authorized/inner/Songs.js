import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity  } from 'react-native';
import { AllStyles } from '../../util/styles/Theme';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
    <View style={AllStyles.TopBar}>
        {/* <Image source={this.Logo} style={AllStyles.SiteLogo}/> */}
    </View> 
}


const RewardGrid = prop => {
    const LeftBorder = parseInt(prop.leftborder);
    const BottomBorder = parseInt(prop.bottomborder);
    var index = prop.image;
    var title = prop.title;
    const navigation = useNavigation();
    return (
        <View style={AllStyles.AllRewardsCol}>
            <View style={[AllStyles.AllRewardsColInner, {borderRightWidth: LeftBorder}, {borderBottomWidth: BottomBorder} ]}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Games', { name: 'Jane' })
                }}>
                    <View style={AllStyles.AllRewardsColInnerImage}>
                        <Image source={ImageIcons[index]} style={AllStyles.AllRewardsColInnerImageMain}/>
                    </View>
                    <View style={AllStyles.AllRewardsColInnerText}>
                        <Text style={AllStyles.AllRewardsColInnerTextMain}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const SongsScreen  = ({ navigation }) => {
    return(
        <View style={AllStyles.container}>
            <Image source={require('../../assets/images/bg/main-bg.png')} style={AllStyles.MainBoxBG}/>
            {/* <ImageBackground source={require('../../assets/images/bg/main-bg.png')} resizeMode="cover" style={AllStyles.image}> */}
                <View style={AllStyles.Overlay}>
                    <View style={AllStyles.TopBar}>
                        <Image source={require('../../assets/images/logo.png')} style={AllStyles.SiteLogo}/>
                    </View>
                    <TopBar logo={require('../../assets/images/logo.png')}/>
                    <View style={AllStyles.AllRewardsOuter}>
                        <Image source={require('../../assets/images/bg/song-bg-02.png')} style={AllStyles.InnerBoxBG}/>
                        {/* <ImageBackground source={require('../../assets/images/bg/modal-bg.png')} style={AllStyles.InnerBoxBG}> */}
                            <View style={AllStyles.AllRewardsInner}>
                                <View style={AllStyles.RewardTopBar}>
                                    <Text style={AllStyles.RewardTopBarTitle}>All You Can Have !!</Text>
                                </View>
                                <View style={AllStyles.AllRewardsGrid}>
                                    <RewardGrid leftborder='1' bottomborder='1' image='songs' title='Songs' nav={navigation}/>
                                    <RewardGrid leftborder='0' bottomborder='1' image='movies' title='Movies'/>
                                    <RewardGrid leftborder='1' bottomborder='1' image='books' title='Books'/>
                                    <RewardGrid leftborder='0' bottomborder='1' image='quotes' title='Quotes'/>
                                    <RewardGrid leftborder='1' bottomborder='0' image='news' title='News'/>
                                    <RewardGrid leftborder='0' bottomborder='0' image='commingsoon' title='Coming Soon'/>
                                </View>
                            </View>
                        {/* </ImageBackground> */}
                    </View>
                </View>
            {/* </ImageBackground> */}
            <Image  source={require('../../assets/images/bg/bottom-bg.png')} style={AllStyles.BottomNavBG}/>
        </View>
    );
}