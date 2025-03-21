/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';

const MemberLoginHomeScreen = () => {
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
      <View style={styles.introVideo}>
        <GradientButton
          title="Edit Profile"
          height="50"
          width="40%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={16}
          fontWeight="500"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <GradientButton
          title="LOG IN"
          height="50"
          width="40%"
          backgroundColors={['#F8B88C', '#E89A6A']}
          bottomColor="#d67a43"
          color="#fff"
          borderRadius={5}
          fontSize={16}
          fontWeight="500"
          onPress={() => navigation.navigate('MemberLogin')}
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
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 35,
    marginTop: 80,
  },
});

export default MemberLoginHomeScreen;
