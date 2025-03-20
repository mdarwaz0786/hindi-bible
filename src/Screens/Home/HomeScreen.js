/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={styles.heading}><Text style={{ color: '#d67a43' }}>TGC</Text> HINDI BIBLE STUDY APP</Text>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Subscribers"
          height="35"
          width="30%"
          backgroundColors={['#F7D154', '#E3B500']}
          bottomColor="#c89600"
          borderRadius={5}
        />
        <GradientButton
          title="Latest News"
          height="35"
          width="35%"
          backgroundColors={['#6A9FC8', '#4C7FA2']}
          bottomColor="#2e5d82"
          borderRadius={5}
          onPress={() => navigation.navigate('LatestNews')}
        />
        <GradientButton
          title="Contact Us"
          height="35"
          width="30%"
          backgroundColors={['#7FAF5C', '#5E8C3A']}
          bottomColor="#3f6b26"
          borderRadius={5}
          onPress={() => navigation.navigate('ContactUs')}
        />
      </View>

      <View style={[styles.introVideo, { marginTop: 40 }]}>
        <GradientButton
          title="INTRO VIDEO"
          height="100"
          width="50%"
          backgroundColors={['#C8E3BA', '#A4C895']}
          bottomColor="#8ab57a"
          color="#333"
          borderColor="#ccc445"
          borderWidth={2}
          borderRadius={5}
          fontSize={16}
          onPress={() => navigation.navigate('IntroVideo')}
        />
      </View>

      <View style={styles.introVideo}>
        <GradientButton
          title="1 Day free trial"
          title2="Ek din ka free trial"
          height="50"
          width="50%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('Register')}
        />
      </View>

      <View style={styles.introVideo}>
        <GradientButton
          title="Your Contribution"
          title2="Aapka Arthik Yogdan"
          height="50"
          width="50%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('YourContribution')}
        />
      </View>

      <View style={styles.introVideo}>
        <GradientButton
          title="New Sign up"
          height="50"
          width="50%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
        />
      </View>

      <View style={styles.introVideo}>
        <GradientButton
          title="Member Log in"
          height="50"
          width="50%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('MemberLogin')}
        />
      </View>

      <View style={styles.introVideo}>
        <GradientButton
          title="hindibiblestudy.com"
          height="35"
          width="60%"
          backgroundColors={['#86BCE6', '#6A9FD1']}
          bottomColor="#487bb0"
          color="#fff"
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
    backgroundColor: '#FFF2CC',
    padding: 10,
  },
  topBar: {
    marginTop: 12,
    marginBottom: 30,
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#36573d',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  introVideo: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
