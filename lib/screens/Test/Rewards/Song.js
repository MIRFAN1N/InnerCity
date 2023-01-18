import React, {useState} from 'react';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Constant from '../../../util/constant/Constant';
import {SongStyle} from '../../../util/styles/Theme';

const Song = props => {
  const index = props.index;
  const name = props.name;
  const start = props.start;
  const [playSong, setPlaySong] = useState(false);

  //   var ControlIconPlay = require('../../../assets/images/icons/play.png');
  //   var ControlIconPause = require('../../../assets/images/icons/pause.png');
  var ControlIconPlay;
  if (!playSong) {
    ControlIconPlay = require('../../../assets/images/icons/play.png');
  } else {
    ControlIconPlay = require('../../../assets/images/icons/pause.png');
  }

  const PlaySongs = (songname, id) => {
    start(false);
    try {
      SoundPlayer.loadUrl(Constant.SONG_REWARD_URL + songname);
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
    setPlaySong(!playSong);
    console.log(playSong.status);

    // setPlaySong({
    //   status: !playSong[id],
    // });

    if (!playSong) {
      SoundPlayer.resume();
    } else {
      SoundPlayer.pause();
    }
  };
  return (
    <TouchableOpacity
      style={SongStyle.SongPlayrow}
      key={index}
      onPress={e => PlaySongs(name.song, index)}>
      <View style={SongStyle.SongPlayBtn}>
        <Image source={ControlIconPlay} style={SongStyle.SongControlImg} />
      </View>
      <View style={SongStyle.SongDetails}>
        <Image
          source={{uri: Constant.SONGS_REWARD_URL + name.thumbnail}}
          style={SongStyle.SongDetailsImg}
        />
        <View style={SongStyle.SongDetailsNames}>
          <Text style={SongStyle.SongDetailsTitle}>{name.name}</Text>
          <Text style={SongStyle.SongDetailsSinger}>{name.singer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Song;
