/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Linking, ScrollView, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import VideoPlayer from '../../Components/Video/VideoPlayer.js';
import Button from '../../Components/Button/Button.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={[styles.heading, { fontFamily: 'Cambria', lineHeight: 25 }]}><Text style={{ color: COLORS.peru }}>TGC</Text> HINDI BIBLE STUDY</Text>

      <View style={styles.starContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Animated.Text style={{ opacity, fontSize: 20, color: 'red' }}>★</Animated.Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Subscribers"
          height="30"
          width="26%"
          gradientType="yellow"
          borderRadius={5}
        />
        <View style={styles.subscriber}>
          <Text style={styles.subscriberText}>123456</Text>
        </View>
        <GradientButton
          title="Latest News"
          height="30"
          width="28%"
          gradientType="blue"
          borderRadius={5}
          onPress={() => navigation.navigate('LatestNews')}
        />
        <GradientButton
          title="Contact Us"
          height="30"
          width="25%"
          gradientType="green"
          borderRadius={5}
          onPress={() => navigation.navigate('ContactUs')}
        />
      </View>

      <View style={styles.emojiContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
          <View style={styles.emojiBackground}>
            <Text style={styles.emoji}>❤️ 20</Text>
          </View>
          <View style={styles.emojiBackground}>
            <Text style={styles.emoji}>👍 20</Text>
          </View>
          <Text style={[styles.text, { marginTop: -15 }]}>26/03/2025</Text>
        </View>
      </View>

      <View style={styles.priceButton}>
        <Button
          title="1 Year Fee = 300/-"
          height="40"
          width="50%"
          backgroundColor="#c00000"
          color="#ffff00"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          borderColor="#ffff00"
          borderWidth={4}
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
  },
  topBar: {
    marginTop: 15,
    marginBottom: 5,
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
    marginTop: 3,
    marginHorizontal: 10,
  },
  subscriber: {
    backgroundColor: BACKGROUND_COLORS.white,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginLeft: -15,
  },
  subscriberText: {
    color: '#333',
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
    marginTop: 10,
  },
  emojiContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  emojiBackground: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 14,
  },
  text: {
    fontSize: 15,
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 235,
    marginTop: 5,
  },
  priceButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
