/* eslint-disable react-native/no-inline-styles */
import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

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
          height="35"
          width="40%"
          backgroundColors={['#7bb659', '#7bb659']}
          bottomColor="#66a637"
          borderRadius={5}
        />
        <GradiantButton
          title="LOG OUT"
          height="35"
          width="25%"
          backgroundColors={['#E74C3C', '#C0392B']}
          bottomColor="#A93226"
          borderRadius={5}
        />
        <GradiantButton
          title="Back"
          height="35"
          width="20%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
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
    backgroundColor: '#FFF2CC',
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
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: '#000',
    borderBottomColor: '#000',
  },
  videoContainer: {
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

export default GenesisScreen;
