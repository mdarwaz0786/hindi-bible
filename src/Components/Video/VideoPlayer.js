import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

const VideoPlayer = ({ videoSource, thumbnail, frameSource, style }) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <ImageBackground source={frameSource} style={[styles.videoFrame, style]} resizeMode="stretch">
      <View style={styles.videoContainer}>
        {!playVideo ? (
          <TouchableOpacity onPress={() => setPlayVideo(true)} style={styles.video}>
            <Image source={thumbnail} style={styles.video} resizeMode="cover" />
            <View style={styles.playIconContainer}>
              <Icon name="play-circle" size={50} color="white" />
            </View>
          </TouchableOpacity>
        ) : (
          <Video source={videoSource} style={styles.video} controls resizeMode="cover" paused={false} />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  videoFrame: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '96%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playIconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default VideoPlayer;
