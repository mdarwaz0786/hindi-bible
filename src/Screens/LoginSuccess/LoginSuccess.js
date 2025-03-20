/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const LoginSuccessScreen = () => {
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

      <View style={styles.messageContainer}>
        <Text style={[styles.text, { marginBottom: 50 }]}>YOUR FREE TRIAL WILL EXPIRE BY <Text style={{ color: '#fed040' }}>20:41</Text> TOMORROW</Text>
        <Text style={styles.text}>आपका फ्री ट्रायल कल <Text style={{ color: '#fed040' }}>20:41</Text> को समाप्त हो जाएगा</Text>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="OK"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#f09f61', '#f09f61']}
          bottomColor="#c05a17"
          borderRadius={5}
          onPress={() => navigation.navigate('Main')}
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
  messageContainer: {
    backgroundColor: '#4474c1',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 50,
    marginVertical: 25,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginSuccessScreen;
