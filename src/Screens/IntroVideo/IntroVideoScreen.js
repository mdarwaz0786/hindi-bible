import { View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const IntroVideoScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/videoFrame.jpeg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Video
          source={require('../../Assets/myvideo.mp4')}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          paused={true}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '95%',
    height: 182,
  },
});

export default IntroVideoScreen;
