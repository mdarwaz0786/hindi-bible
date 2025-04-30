/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');

  const countryCodes = [
    { label: '+1', value: '+1' },
    { label: '+91', value: '+91' },
    { label: '+44', value: '+44' },
    { label: '+61', value: '+61' },
    { label: '+49', value: '+49' },
    { label: '+33', value: '+33' },
    { label: '+39', value: '+39' },
    { label: '+81', value: '+81' },
    { label: '+55', value: '+55' },
    { label: '+86', value: '+86' },
    { label: '+34', value: '+34' },
    { label: '+27', value: '+27' },
    { label: '+52', value: '+52' },
    { label: '+64', value: '+64' },
    { label: '+7', value: '+7' },
    { label: '+977', value: '+977' },
    { label: '+92', value: '+92' },
    { label: '+94', value: '+94' },
    { label: '+880', value: '+880' },
    { label: '+39', value: '+39' },
    { label: '+353', value: '+353' },
    { label: '+63', value: '+63' },
    { label: '+44', value: '+44' },
    { label: '+54', value: '+54' },
    { label: '+971', value: '+971' },
    { label: '+60', value: '+60' },
    { label: '+41', value: '+41' },
  ];

  return (
    <ScrollView style={styles.container}>
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Name (आपका नाम)</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mobile (मोबाइल)</Text>
          <View style={styles.mobileInputContainer}>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={countryCode}
                onValueChange={(itemValue) => setCountryCode(itemValue)}
                style={styles.picker}
              >
                {countryCodes.map((code) => (
                  <Picker.Item key={code.value} label={code.label} value={code.value} />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.mobileInput}
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email (ईमेल)</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>
      </View>

      <View style={[styles.button, { marginBottom: 30 }]}>
        <GradiantButton
          title="NEXT"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="orange"
          borderRadius={5}
          onPress={() => navigation.navigate('Login')}
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
    marginTop: 25,
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: BACKGROUND_COLORS.skyBlue,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 20,
    paddingHorizontal: 20,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 30,
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
    height: 50,
  },
  mobileInputContainer: {
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLORS.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  pickerWrapper: {
    width: 100,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  picker: {
    height: 50,
    width: '101%',
    marginLeft: 5,
  },
  mobileInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
  },
});

export default RegisterScreen;
