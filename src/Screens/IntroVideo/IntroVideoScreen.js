import { View, StyleSheet } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const IntroVideoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../Assets/myvideo.mp4')}
          style={styles.video}
          controls={true}
          resizeMode="cover"
          paused={true}
        />
      </View>
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
  videoContainer: {
    marginTop: 100,
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 250,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default IntroVideoScreen;
