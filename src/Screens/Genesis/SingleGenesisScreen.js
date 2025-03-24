import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';

const SingleGenesisScreen = () => {
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
          height="35"
          width="20%"
          fontSize={16}
          gradientType="yellow"
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
          Following a hiker in a beautiful green forest with patches of sunshine on the path.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
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
    marginHorizontal: 10,
  },
  videoWrapper: {
    backgroundColor: BACKGROUND_COLORS.deepBrown,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  videoContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default SingleGenesisScreen;
