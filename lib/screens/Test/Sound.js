const Sound = require('react-native-sound');

Sound.setCategory('Playback');
var sound1 = new Sound(
  require('../../assets/sound/Prolific.mp3'),
  (error, sound) => {
    if (error) {
      console.log('error' + error.message);
      return;
    }
  },
);

export default sound1;
