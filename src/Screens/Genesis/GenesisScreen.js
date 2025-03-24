/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const GenesisScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="GENESIS CLASSES"
          height="30"
          width="40%"
          gradientType="green"
          borderRadius={5}
        />
        <GradiantButton
          title="Log Out"
          height="30"
          width="25%"
          gradientType="red"
          borderRadius={5}
        />
        <GradiantButton
          title="Back"
          height="30"
          width="20%"
          fontSize={16}
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.videoWrapper}>
        <Pressable
          style={styles.videoContainer}
          onPress={() => navigation.navigate('SingleGenesis')}
        >
          <Video
            source={require('../../Assets/myvideo.mp4')}
            style={styles.video}
            controls={true}
            resizeMode="cover"
            paused={true}
          />
        </Pressable>
        <Pressable
          style={[styles.videoContainer, { marginTop: 16 }]}
          onPress={() => navigation.navigate('SingleGenesis')}
        >
          <Video
            source={require('../../Assets/myvideo.mp4')}
            style={styles.video}
            controls={true}
            resizeMode="cover"
            paused={true}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
    padding: 10,
  },
  topBar: {
    marginTop: 25,
    marginBottom: 16,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    marginBottom: 20,
  },
  videoWrapper: {
    backgroundColor: BACKGROUND_COLORS.white,
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  videoContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 250,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default GenesisScreen;
