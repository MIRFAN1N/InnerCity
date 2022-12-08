import { StyleSheet, Text, View, Dimensions } from 'react-native';
// All Styles
export const BottomTabStyle = [{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#ffffff00',
    borderRadius: 15,
    height: 90,
    borderWidth: 0,
    borderTopWidth: 0,
}];

export const MainNavigatorOpt = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: BottomTabStyle,
}

export const IntroStyle = {
  IntroBG : {
    backgroundColor : "#08205C",
    height : Dimensions.get('window').height,
    width : Dimensions.get('window').width * 1,
  },
  Dots : {
    backgroundColor : "#ccc",
  },
  ActiveDot : {
    backgroundColor : "#DD6D25",
  },
  WelcomeScreen: {
    backgroundColor: '#08205C',
    height : Dimensions.get('window').height,

  },
  WelcomeBanner : {
    height : Dimensions.get('window').height * .35,
    overflow : 'hidden'
  },
  WelcomeBannerImage : {
    height : Dimensions.get('window').height * .35,
    width : Dimensions.get('window').width * 1,
    resizeMode : 'stretch',

  },
  WelcomeContent : {
    padding : 30,
  },
  WelcomeContentTitle : {
    fontSize: 30,
    color : '#fff',
    fontWeight : '600',
    marginBottom : 10,
  },
  WelcomeContentSubTitle : {
    fontSize: 12,
    color : '#fff',
    marginBottom : 10,
  },
  WelcomeContentText : {
    fontSize: 12,
    color : '#fff',
  },
  LoginScreenBG : {
    top : 0,
    left : 0,
    position : 'absolute',


  },
  LoginScreenBGImage : {
    height : Dimensions.get('window').height,
    width : Dimensions.get('window').width,
    resizeMode : 'stretch',
  },
  APPLogo : {
    width: 250,
    height: 100,
    resizeMode: 'cover',
    marginTop : Dimensions.get('window').height * .25                                                                                           ,
  },
  RegisterAPPLogo : {
    width: 250,
    height: 100,
    resizeMode: 'cover',
    marginTop : Dimensions.get('window').height * .1,
  },
  APPLogoOuter : {
    height : Dimensions.get('window').height * .35,
    alignItems : 'center'
  },
  RegisterLogoOuter : {
    height : Dimensions.get('window').height * .4,
    alignItems : 'center'
  },
  LoginContent : {
    marginTop : Dimensions.get('window').height * .05,
    backgroundColor : "#08205cf0",
    height : Dimensions.get('window').height * .6,
    padding : 30,
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,
  },
  LoginGrid : {
    flex : 1,
    flexDirection : 'column',
  },
  FieldInput : {
    width : "80%",
  },
  FormField : {
    width: "100%",
    fontSize: 14,
    height: "100%",
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    color: "#000",
    borderBottomRightRadius: 8,
    backgroundColor: "#fff",
    height : 50,
    overflow : 'hidden'
  },
  LoginGridRow : {
    marginTop : 12,
    flexDirection : 'row',
    height : 50,
  },
  FieldIcon : {
    width: "20%",
    height: 50,
    paddingHorizontal: 15,
    alignItems: "center",
    borderTopLeftRadius: 8,
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    backgroundColor: "#DD6D25",
  },
  FieldIconImage : {
    width : 20,
    height : 20,
  },
  FormLink : {
    color : "#fff",
    textAlign : "right",
    width : "100%",
  },
  LoginGridRowText : {
    width : "100%",
  },
  LoginButtonOuter : {
    width : "100%",
    height : 50,
  },
  LoginButton : {
    borderRadius: 20,
    marginVertical: 33,
  },
  LoginButtonText : {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#000",
  }
}

export const AllStyles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
    },
    TabIcons : {
        width:50,
        height:50,
    },
    TopBar: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        position: 'relative',
        height: 100,
        textAlign: 'center'
    },
    SiteLogo: {
        width: 250,
        height: 100,
        position: 'absolute',
        left : '50%',
        transform: [
          { translateX: - Dimensions.get('window').width * 0.28 },
        ],
    },
    AllRewardsColInnerImageMain: {
        width: 40,
        height: 40,
        textAlign: "center",
      },
      AllRewardsCol: {
        width: '50%',
      },
      AllRewardsColInnerImage: {
        width: 80,
        height: 80,
        backgroundColor: '#ffffff8f',
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      AllRewardsColInner: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderColor: '#ffffff8f',
      },
      AllRewardsColInnerTextMain: {
        color: '#fff',
        paddingTop: 10,
        textAlign: 'center',
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      AllRewardsGrid: {
        padding: 15,
        flexDirection: "row",
        flexWrap: "wrap",
      },
      Overlay: {
        flex: 1,
        backgroundColor: '#08205BB5',
        width: '100%',
      },
      RewardTopBarTitle: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800',
        textTransform: 'uppercase',
      },
      AllRewardsInner: {
        width: '100%',
        padding: 10,
      },
      FullBox: {
        width: '100%',
        height: '90%',
        overflow: 'hidden',
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        resizeMode: 'strech',
      },
      AllRewardsOuter: {
        padding: 20,
        position: 'relative',
      },
      InnerBoxBG: {
        top: 0,
        left: '50%',
        height: '100%',
        width: '100%',
        position: "absolute",
        resizeMode : 'stretch',
        borderRadius: 15,
        opacity: 1,
        transform: [
          { translateX: - Dimensions.get('window').width * 0.4 },
        ],
      },
      MainBoxBG: {
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        position: "absolute",
        resizeMode : 'cover',
        opacity: 1,
      },
      ActiveTabIcon: {
        width:90,
        height:90,
        position: 'absolute',
        top: -20,
      },
      BottomNavBG: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 60,
      },
      NoBorder : {
        borderWidth: 0,
      }
});

export const ProfileStyles = StyleSheet.create({
  FullWidth : {
    flex: 1,
    width: '100%',
  },
  TopBarOuter :{
    width : '100%',
    padding: 10,
    height: 60,
  },
  TopBarText: {
    color : '#fff',
    fontSize: 18,
    fontWeight : 'bold',
  },
  TopBarTextOuter : { 
    marginLeft : 15,
  },
  TopBarIcon : {
    width : 20,
    height: 20,
  },
  TopBarSides : {
    flex: 1,
    flexDirection : 'row',
    alignContent : 'space-between',
  },
  TopBarLeft : {
    width : '50%',
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center'
  },
  TopBarRight : {
    alignSelf : 'flex-end',
    justifyContent : 'center',
    width : 30,
    height : 60,
    paddingTop: 19,
  },
  UserProfileOuter : {
    padding :  10,
    height: 220,
    width : '100%',
    alignItems: 'center',
  },
  UserProfileImage : {
    width: (Dimensions.get("screen").height/100) * 20,
    height : (Dimensions.get("screen").height/100) * 20,
    borderRadius : 100,
    overflow : 'hidden',
    resizeMode : 'cover',
    marginBottom: 15,
  },
  TextColorWhite: {
    color: '#fff',
    fontSize: 15,
  },
  TextGrid : {
    flexDirection : 'row',
    alignContent : 'space-between',
    padding: 20,
  },
  TextGridInnerleft :{
    width: 100,
  },
  TextGridOuter: {
    flex: 1,
    marginTop : 30,
  },
  LogoutOuter: {
    padding: 10,
  },
  LogoutText : {
    textAlign : 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  LogoutInner : {
    borderTopWidth : 1,
    borderTopColor: '#dedede',
    paddingTop: 10
  },
  ProfileText : {
    fontSize: 20,
    fontWeight: '600',
  }
});