import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';

const MemberLoginHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={styles.heading}><Text style={{ color: COLORS.peru }}>TGC</Text> HINDI BIBLE STUDY APP</Text>

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
      <View style={styles.introVideo}>
        <GradientButton
          title="Edit Profile"
          height="45"
          width="35%"
          gradientType="orange"
          borderRadius={5}
          fontSize={16}
          fontWeight="500"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <GradientButton
          title="LOG IN"
          height="45"
          width="35%"
          gradientType="orange"
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
    backgroundColor: BACKGROUND_COLORS.primary,
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
  introVideo: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 35,
    marginTop: 80,
  },
});

export default MemberLoginHomeScreen;
