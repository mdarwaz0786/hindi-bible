/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
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
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={[styles.heading, { fontFamily: 'Cambria', lineHeight: 25 }]}><Text style={{ color: COLORS.peru }}>TGC</Text> HINDI BIBLE STUDY</Text>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Subscribers"
          height="30"
          width="30%"
          gradientType="yellow"
          borderRadius={5}
        />
        <View style={styles.subscriber}>
          <Text style={styles.subscriberText}>555</Text>
        </View>
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

      <View style={styles.videoPlayer}>
        <VideoPlayer
          videoSource={require('../../Assets/myvideo.mp4')}
          thumbnail={require('../../Assets/videoThumbnail.jpeg')}
          frameSource={require('../../Assets/videoFrame.jpeg')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="1 Day Free Trial"
          title2="Ek Din Ka Free Trial"
          height="55"
          width="50%"
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
          height="55"
          width="50%"
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
          title="New Sign Up"
          height="55"
          width="50%"
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
          title="Member Log In"
          height="55"
          width="50%"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
    padding: 16,
    paddingTop: 0,
  },
  topBar: {
    marginTop: 25,
    marginBottom: 16,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.deepMossGreen,
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 0,
  },
  subscriber: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 3,
    padding: 4,
  },
  subscriberText: {
    color: '#000',
  },
  button: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
