import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const SingleMattScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="MATTHEW CLASSES"
          height="35"
          width="45%"
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
        <View style={styles.videoContainer}>
          <Video
            source={require('../../Assets/myvideo.mp4')}
            style={styles.video}
            controls={true}
            resizeMode="cover"
            paused={true}
          />
        </View>
        <Text style={styles.description}>
          Following a hiker in a beautiful green forest with patches of sunshine on the path
        </Text>
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
    backgroundColor: '#1e0a02',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  videoContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SingleMattScreen;
