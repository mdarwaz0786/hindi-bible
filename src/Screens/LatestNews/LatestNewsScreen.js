import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GradiantButton from '../../Components/Button/GradientButton.js';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const LatestNewsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <GradiantButton
          title="LOG OUT"
          height="27"
          width="25%"
          backgroundColors={['#E74C3C', '#C0392B']}
          bottomColor="#A93226"
          borderRadius={5}
          fontWeight={400}
        />
        <GradiantButton
          title="Home"
          height="27"
          width="25%"
          backgroundColors={['#F7D154', '#E3B500']}
          bottomColor="#c89600"
          borderRadius={5}
          fontWeight={400}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  topSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 16,
  },
  videoContainer: {
    marginTop: 100,
    borderWidth: 1,
    borderColor: '#c89600',
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
    marginTop: 50,
    fontSize: 15,
  },
});

export default LatestNewsScreen;
