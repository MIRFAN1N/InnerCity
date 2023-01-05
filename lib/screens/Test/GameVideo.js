import React, {useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {ImageBackground} from 'react-native';
import {View} from 'react-native';
import Video from 'react-native-video';
import {BottomNavigation} from '../../util/navigation/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import {
  AllStyles,
  GameStyle,
  IntroStyle,
  RewardStyle,
} from '../../util/styles/Theme';
import Constant from '../../util/constant/Constant';

export const GameVideo = (props, route) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const {id} = props.route.params;
  const {name} = props.route.params;
  const {video} = props.route.params;
  const {gameId} = props.route.params;
  const {rewardRowId} = props.route.params;
  console.log(rewardRowId, gameId);

  const StartVideo = () => {
    setLoading(false);
  };

  const GotReward = () => {
    navigation.navigate('Reward', {
      id: id,
      name: name,
      gameId: gameId,
      rewardRowId: rewardRowId,
    });
  };

  return (
    <View style={AllStyles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={AllStyles.Indicator}
          visible={loading}
          color="#000"
        />
      ) : (
        ''
      )}
      <ImageBackground
        source={require('../../assets/images/bg/main-bg.png')}
        style={IntroStyle.LoginScreenBGImage}>
        <View style={AllStyles.Overlay}>
          <View style={AllStyles.TopBar}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={AllStyles.SiteLogo}
            />
          </View>
          <View style={GameStyle.AllRewardsOuterGame}>
            <Image
              source={require('../../assets/images/bg/song-bg-02.png')}
              style={RewardStyle.InnerBoxBG}
            />
            <View style={GameStyle.AllRewardsInner}>
              <Video
                // source={{
                //   uri: 'https://inner-city-assets-tes.s3.us-east-1.amazonaws.com/InnerCityAssets/Slot%20Machine.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBMNc7%2F8GJins%2Bc7DNSsaFJgV153ILjuUfjUXxT0XV1fwIgXDRaT0ArBOaapbImw%2B%2BJaMqUqPej8E34vism1o%2F9yngq7QII7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NzYxNzIzMDYyMjQiDJxuq7Pp6537o%2FfVIyrBAqnJWNCJYbb3sna9XcJHKrymw0gzJ8I8KJKUzvb8eVbWw82em7zEIOP%2FNgNVc6OuIUb1B0kPOru74tgydwLAFpi4uiJvhqOgZLNvxt50SfK0CLwZuAQ%2FC2LMhI5vR7IVUVmeU%2FfktvJyUsBJCaaG%2FYRPj1phclE5EcNqeztCsitFqjdKb1Y4CfNWIcNbyVqNJYHunKwT1efqmWwuZSnZQfV7%2BNkIubabIXydsgRb9J4J9tOGHaRLNssRTUR2Q0aLijofJXFJ142UAIG%2ByFKvKLgULQ7m0SZ0O1Jnz%2Fuwh46B%2FRREGaAggWHEOCZ6yz24BnziBnfUFNVCvCxYTamnTaGjArSG10Mj9xngDNaZCFgCKXmwk7A33bZSAhJDju1yQMMJAB3MToo%2BqP5xXbk9ERLjjgwqwGXA6nkLKup4Tt9rAjCghtadBjq0Aii7nbl6yKhjcr%2BhKStpiV19j3ckPp65ML8zy85h5lfxY3HUxcj8h2KYoec2%2FvFEXEAGkkoYTUBF3JQlkWvqB%2FtSWJ7KQVAAoDWx%2Fy1NkqWiKtBVJX7Bp1v4sIDm%2Bqcc%2BRNPor2dp8iEMW9VLfQiM34gOP7v7Mf1EVBBJFZ2NcDbr%2FC5CS0eQNSU3wYJ5cOBrl5Odn9hplEy9hpS2nV1Hq73HbgmkEXYTTkB6r17izUJUDWgpA5fqtepUMkZGEy8hlh8GSjNWjaKBKZxW5D9kll4O8n8Abbc8XMVaxQvv18DuxAt4uc1l5%2BM6zBxG5yhw75wwSekZAdUMH%2FrvupN5n2k9NVB5oWlHxYWG%2BO5%2FAdngFgieYPW7x4Td16j2h7muKWkiIsUri13Vb2VwTwDUMMDumsz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230104T144147Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5XQUY4YFGAR4B4F%2F20230104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d776690dabb586efc6acd5d0bb5d51022b04e064be4949714c8f2b529e85d59e',
                // }}
                onLoad={StartVideo}
                source={{uri: Constant.GAME_VIDEO_URL + video}}
                // source={require('../../assets/images/videos/SlotTest.mp4')}
                onEnd={GotReward}
                resizeMode="contain"
                style={GameStyle.RewardGameVideo}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation />
    </View>
  );
};
