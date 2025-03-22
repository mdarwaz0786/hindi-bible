import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Home"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>CREATE ACCOUNT (अकाउंट बनाइये)</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>USERNAME</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity style={styles.showButton} onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? 'eye' : 'eye-off'} size={25} color={COLORS.white} />
            <Text style={styles.showText}>{passwordVisible ? 'Hide Password' : 'Show Password'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="LOGIN"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="orange"
          borderRadius={5}
          onPress={() => navigation.navigate('LoginSuccess')}
        />
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
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: BACKGROUND_COLORS.skyBlue,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 20,
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 35,
    marginHorizontal: 30,
  },
  formTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    backgroundColor: BACKGROUND_COLORS.white,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  showButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 20,
  },
  showText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.lightGreen,
  },
});

export default LoginScreen;
