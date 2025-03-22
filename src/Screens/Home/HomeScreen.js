/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import VideoPlayer from '../../Components/Video/VideoPlayer.js';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={[styles.heading, { fontFamily: 'Cambria' }]}><Text style={{ color: COLORS.peru, fontFamily: 'Cambria' }}>TGC</Text> HINDI BIBLE STUDY</Text>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Subscribers"
          height="30"
          width="30%"
          gradientType="yellow"
          borderRadius={5}
        />
        <GradientButton
          title="Latest News"
          height="30"
          width="30%"
          gradientType="blue"
          borderRadius={5}
          onPress={() => navigation.navigate('LatestNews')}
        />
        <GradientButton
          title="Contact Us"
          height="30"
          width="30%"
          gradientType="green"
          borderRadius={5}
          onPress={() => navigation.navigate('ContactUs')}
        />
      </View>

      <VideoPlayer
        videoSource={require('../../Assets/myvideo.mp4')}
        thumbnail={require('../../Assets/videoThumbnail.jpeg')}
        frameSource={require('../../Assets/videoFrame.jpeg')}
        style={{ marginTop: 20, marginBottom: 0 }}
      />

      <View style={styles.button}>
        <GradientButton
          title="1 Day free trial"
          title2="Ek din ka free trial"
          height="48"
          width="48%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('Register')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="Your Contribution"
          title2="Aapka Arthik Yogdan"
          height="48"
          width="48%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('YourContribution')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="New Sign up"
          height="48"
          width="48%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('NewSignup')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="Member Log in"
          height="48"
          width="48%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('MemberLoginHome')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="hindibiblestudy.com"
          height="35"
          width="55%"
          gradientType="blue"
          color={COLORS.white}
          borderRadius={5}
          fontSize={16}
          fontWeight="500"
          onPress={() => Linking.openURL('https://hindibiblestudy.com')}
        />
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
    marginBottom: 15,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.deepMossGreen,
    textShadowColor: COLORS.shadowColor,
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoFrame: {
    marginTop: 20,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '95%',
    height: '88%',
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

export default HomeScreen;
