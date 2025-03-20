/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const YourContributionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Home"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.payDirectContainer}>
        <Text style={[styles.text, { color: '#a85734' }]}>डायरेक्ट हमारे बैंक में पैसे भेजने के लिए PAY DIRECT दबाइए</Text>
        <Text style={[styles.text, { color: '#a85734' }]}>TO SEND MONEY TO OUR BANK DIRECTLY CLICK PAY DIRECT</Text>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Pay Direct"
          height="40"
          width="40%"
          fontSize={16}
          backgroundColors={['#7FAF5C', '#5E8C3A']}
          bottomColor="#3f6b26"
          borderRadius={5}
          onPress={() => navigation.navigate('PayDirect')}
        />
      </View>

      <View style={[styles.payDirectContainer, { backgroundColor: '#7e6000' }]}>
        <Text style={styles.text}>APP के ज़रिये पैसे भेजने के लिए PAY THRU APP दबाइए</Text>
        <Text style={styles.text}>TO SEND MONEY TO THRUOUGH APP CLICK PAY THRU APP</Text>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="PAY THRU APP"
          height="40"
          width="40%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
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
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  payDirectContainer: {
    backgroundColor: '#fed966',
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginTop: 30,
    rowGap: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default YourContributionScreen;
