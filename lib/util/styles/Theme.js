import {StyleSheet, Dimensions} from 'react-native';
// All Styles
export const BottomTabStyle = [
  {
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
  },
];

export const MainNavigatorOpt = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: BottomTabStyle,
};

export const IntroStyle = {
  IntroBG: {
    backgroundColor: '#08205C',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width * 1,
  },
  Dots: {
    backgroundColor: '#ccc',
  },
  ActiveDot: {
    backgroundColor: '#DD6D25',
  },
  WelcomeScreen: {
    backgroundColor: '#08205C',
    height: Dimensions.get('window').height,
  },
  WelcomeBanner: {
    height: Dimensions.get('window').height * 0.35,
    overflow: 'hidden',
  },
  WelcomeBannerImage: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width * 1,
    resizeMode: 'stretch',
  },
  WelcomeContent: {
    padding: 30,
  },
  WelcomeContentTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 10,
  },
  WelcomeContentSubTitle: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
  WelcomeGoogleBtn: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  WelcomeGoogleBtnText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  WelcomeGoogleImg: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: '50%',
    left: 10,
  },
  WelcomeFacebookImg: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: '50%',
    left: 10,
  },
  WelcomeContentText: {
    marginTop: 20,
    fontSize: 12,
    color: '#fff',
  },
  LoginScreenBG: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  LoginScreenBGImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  },
  APPLogo: {
    width: 250,
    height: 100,
    resizeMode: 'cover',
    marginTop: Dimensions.get('window').height * 0.25,
  },
  RegisterAPPLogo: {
    width: 250,
    height: 100,
    resizeMode: 'cover',
    marginTop: Dimensions.get('window').height * 0.1,
  },
  APPLogoOuter: {
    height: Dimensions.get('window').height * 0.35,
    alignItems: 'center',
  },
  RegisterLogoOuter: {
    height: Dimensions.get('window').height * 0.25,
    alignItems: 'center',
  },
  LoginContent: {
    marginTop: Dimensions.get('window').height * 0.05,
    height: Dimensions.get('window').height * 0.6,
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  LoginGrid: {
    flex: 1,
    flexDirection: 'column',
  },
  FieldInput: {
    width: '80%',
  },
  FormField: {
    width: '100%',
    fontSize: 14,
    height: '100%',
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    color: '#000',
    borderBottomRightRadius: 8,
    backgroundColor: '#fff',
    // height: 50,
    overflow: 'hidden',
  },
  LoginGridRow: {
    marginTop: 12,
    flexDirection: 'row',
    height: 50,
  },
  FieldIcon: {
    width: '20%',
    height: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    backgroundColor: '#DD6D25',
  },
  FieldIconImage: {
    width: 20,
    height: 20,
  },
  FormLink: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'right',
    width: '100%',
  },
  LoginGridRowText: {
    width: '100%',
  },
  LoginBtn: {
    color: '#fff',
    backgroundColor: '#dc6b25',
    textAlign: 'center',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 20,
  },
  LoginBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    width: '100%',
  },
  LoginButtonOuter: {
    width: '100%',
    height: 50,
  },
  LoginButton: {
    borderRadius: 20,
    marginVertical: 33,
  },
  LoginButtonText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
  },
  LoginConnect: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 20,
  },

  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  socialButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    width: 150,
  },

  socialButtonText: {
    color: '#000',
  },

  signUpText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupLink: {
    color: '#dc6b25',
    textDecoration: 'underline',
  },

  loginConnect: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 20,
  },
  SignUpWelcomeTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  SignUpWelcomeText: {
    color: '#fff',
    paddingTop: 10,
    textAlign: 'center',
  },
  RegisterForm: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  RegisterFormInput: {
    marginTop: 20,
  },
  RegisterLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  RegisterFormField: {
    color: '#000',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    opacity: 1,
    padding: 10,
    marginTop: 15,
  },
  CheckboxContainer: {
    marginTop: 10,
  },
  RegisterBtn: {
    marginTop: 15,
  },
  CheckboxFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  CheckboxText: {
    color: '#fff',
  },
  RegisterLinks: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
};

export const MainStyle = {
  MainBGImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(8, 32, 92, 0.8)',
  },
};

// By Irfan
export const Customized = {
  BottomNavOuter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
  },
  BottomNavBG: {
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 50,
  },
  BottomNavIcon: {
    width: 50,
    height: 50,
  },
  BottomNavIconCenter: {
    width: 70,
    height: 70,
  },
  BottomNavInner: {
    alignItems: 'center',
  },
  BottomNavGrid: {
    marginBottom: 5,
    width: Dimensions.get('window').width * 0.75,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
};

export const GameStyle = StyleSheet.create({
  AllRewardsInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: 10,
    zIndex: 99,
    padding: 10,
  },

  AllRewardsOuter: {
    height: Dimensions.get('window').height * 0.6,
    overflow: 'hidden',
  },

  RewardGameTitle: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    textTransform: 'uppercase',
    textShadowColor: '#ec7307',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
  },

  RewardGameVideo: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.45,
    position: 'relative',
    borderRadius: 20,
    zIndex: 9,
  },
});

export const GamesStyle = {
  GamesAllRewardsOuter: {
    padding: 20,
    height: Dimensions.get('window').height * 0.7,
    overflow: 'hidden',
  },
  GamesAllRewardsGrid: {
    overflow: 'hidden',
    marginTop: 20,
    height: Dimensions.get('window').height * 0.5,
  },
  GameTabImgOuter: {
    backgroundColor: '#08205C',
    borderRadius: 30,
    height: 100,
    marginBottom: 20,
    position: 'relative',
  },
  GameOverlayText: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: Dimensions.get('window').width * 0.84,
    height: 100,
    backgroundColor: '#08205cc9',
    borderRadius: 30,
  },
  GameTabImg: {
    borderRadius: 30,
    height: 100,
    backgroundColor: '#08205C',
    width: Dimensions.get('window').width * 0.84,
    resizeMode: 'cover',
    marginBottom: 20,
    zIndex: 1,
  },
  GameTabImgText: {
    color: '#fff',
    fontWeight: '800',
    position: 'absolute',
    top: '35%',
    width: Dimensions.get('window').width * 0.84,
    textAlign: 'center',
  },
};

export const RewardStyle = StyleSheet.create({
  PrizeStars: {
    width: 140,
    height: 70,
  },
  PrizeTopBar: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  PrizeAllRewardsOuter: {
    height: Dimensions.get('window').height * 0.7,
    overflow: 'hidden',
  },
  PrizeTicketBg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  PrizeTicket: {
    width: 150,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 5},
    textShadowRadius: 5,
  },
  RewardGameTitle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
  },
  MainTitle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 52,
    fontWeight: '800',
    textTransform: 'uppercase',
    textShadowColor: '#ec7307',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
  },
  PrizeName: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '900',
    textTransform: 'uppercase',
    marginVertical: 10,
    fontSize: 20,
  },
  PrizeAnnouce: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '800',
    textTransform: 'capitalize',
    marginVertical: 20,
  },
  RewardTopBarTitle: {
    color: '#C47E63',
    fontSize: 48,
    textAlign: 'center',
    fontWeight: '800',
    textTransform: 'capitalize',
    marginBottom: 10,
  },

  AllRewardsInner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: 20,
    // top: 40,
    zIndex: 99,
    padding: 10,
  },

  InnerBoxBG: {
    top: 0,
    left: 0,
    height: '100%',
    width: Dimensions.get('window').width * 0.95,
    position: 'relative',
    zIndex: 1,
    // width: '100%',
    resizeMode: 'stretch',
    borderRadius: 15,
    opacity: 1,
    // transform: [{translateX: -Dimensions.get('window').width * 1}],
  },
  GamesAllRewardsOuter: {
    padding: 20,
    height: Dimensions.get('window').height * 0.7,
    overflow: 'hidden',
  },

  AllRewardsOuter: {
    height: Dimensions.get('window').height * 0.6,
    overflow: 'hidden',
  },
});

export const AllStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Indicator: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 99,
  },
  text: {
    fontSize: 20,
  },
  TabIcons: {
    width: 50,
    height: 50,
  },
  TopBar: {
    padding: 10,
    width: '100%',
    height: 100,
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  SiteLogo: {
    width: 250,
    height: 100,
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -Dimensions.get('window').width * 0.28}],
  },
  AllRewardsColInnerImageMain: {
    width: 40,
    height: 40,
    textAlign: 'center',
  },
  AllRewardsCol: {
    width: '33%',
  },
  AllRewardsColInnerImage: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff8f',
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Overlay: {
    flex: 1,
    backgroundColor: '#08205BB5',
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'absolute',
    resizeMode: 'stretch',
    borderRadius: 15,
    opacity: 1,
    transform: [{translateX: -Dimensions.get('window').width * 0.4}],
  },
  MainBoxBG: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 1,
  },
  ActiveTabIcon: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: -20,
  },
  BottomNavBG: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: 60,
  },
  NoBorder: {
    borderWidth: 0,
  },
});

export const ProfileStyles = StyleSheet.create({
  FullWidth: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  TopBarOuter: {
    width: '100%',
    padding: 10,
    height: 60,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9,
  },
  TopBarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TopBarTextOuter: {
    marginLeft: 15,
  },
  TopBarIcon: {
    width: 20,
    height: 20,
  },
  TopBarSides: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  TopBarLeft: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TopBarRight: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: 30,
    height: 60,
    paddingTop: 19,
  },
  UserProfileOuter: {
    padding: 10,
    height: 220,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  UserProfileImage: {
    width: (Dimensions.get('screen').height / 100) * 20,
    height: (Dimensions.get('screen').height / 100) * 20,
    borderRadius: 100,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginBottom: 15,
  },
  TextColorWhite: {
    color: '#fff',
    fontSize: 15,
  },
  TextGrid: {
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 20,
  },
  TextGridInnerleft: {
    width: 100,
  },
  TextGridOuter: {
    flex: 1,
    marginTop: 30,
  },
  LogoutOuter: {
    padding: 10,
  },
  LogoutText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  LogoutInner: {
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    paddingTop: 10,
  },
  ProfileText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export const RewardTopBar = StyleSheet.create({
  Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  MainBoxBG: {
    top: 0,
    backgroundColor: '#08205C',
    left: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
});

export const SongStyle = StyleSheet.create({
  HeadImage: {
    position: 'relative',
    opacity: 0.8,
    top: 0,
    width: '100%',
    height: Dimensions.get('screen').height * 0.5,
  },
  SecondaryBgImage: {
    width: '100%',
    position: 'relative',
    opacity: 0.8,
    bottom: 0,
    height: Dimensions.get('screen').height * 0.5,
  },
});

export const MovieStyle = StyleSheet.create({
  Overlay: {
    backgroundColor: '#08205c',
  },
  MainBoxBG: {
    top: 0,
    backgroundColor: '#08205C',
    left: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  MovieBody: {
    marginTop: 60,
  },
  MovieRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  MovieCol: {
    width: Dimensions.get('screen').width * 0.5,
    overflow: 'hidden',
    padding: 10,
  },
  MovieImg: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  MovieTitle: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  MovieYear: {
    color: '#dcddde',
    textTransform: 'uppercase',
  },
});

export const BookStyle = StyleSheet.create({
  BooksBody: {
    marginTop: 60,
    marginHorizontal: 10,
  },
  BooksRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
  },
  BooksCol: {
    width: Dimensions.get('screen').width * 0.5,
    overflow: 'hidden',
  },
  BooksHeading: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  BooksImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export const ModalStyle = StyleSheet.create({
  TopBarIcon: {
    width: 15,
    height: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: '#364E8C',
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  MovieImg: {
    width: '100%',
    height: 280,
    marginVertical: 20,
    borderRadius: 10,
  },
  ModelTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  ModelCategory: {
    color: '#dcddde',
    fontWeight: 'bold',
    marginVertical: 20,
    fontStyle: 'italic',
  },

  MovieDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },

  MovieDetailsTitle: {
    color: '#dcddde',
    width: '20%',
  },

  MovieDetail: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const QuoteStyle = StyleSheet.create({
  QuoteRow: {
    width: '100%',
    backgroundColor: '#364E8C',
    borderRadius: 10,
    marginBottom: 20,
  },
  QuoteCol: {
    overflow: 'hidden',
    padding: 15,
  },
  QuoteAuthor: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 16,
    marginTop: 20,
  },
});
