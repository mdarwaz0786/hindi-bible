/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const PayThruAppScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Back"
          height="30"
          width="25%"
          fontSize={16}
          gradientType="purple"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={[styles.formTitle, { fontSize: 20, marginBottom: 10, }]}>Payment Gateway</Text>
          <Text style={[styles.formTitle, { fontSize: 14, marginBottom: 10, padding: 5, color: COLORS.white, backgroundColor: BACKGROUND_COLORS.vibrantOrange }]}>UPI/Credit card/Debit Card/Wallet</Text>
          <Text style={styles.formTitle}>If you give  your details, we could acknowledge your payment.</Text>
          <Text style={[styles.formTitle, { marginBottom: 20 }]}>यदि आप अपना विवरण देंगे तो हम आपके भुगतान की पुष्टि कर सकते हैं।</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name <Text style={styles.redStar}>*</Text></Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mobile <Text style={styles.redStar}>*</Text></Text>
            <TextInput style={styles.input} keyboardType="phone-pad" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email <Text style={styles.redStar}>*</Text></Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Account <Text style={styles.redStar}>*</Text></Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>

          <View style={styles.button}>
            <GradiantButton
              title="PAY NOW"
              height="35"
              width="35%"
              fontSize={14}
              fontWeight={500}
              gradientType="lightBlue"
              borderRadius={5}
              onPress={() => navigation.navigate('PayNow')}
            />
          </View>
        </View>
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
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: BACKGROUND_COLORS.deepBrown,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  formTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.white,
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
  },
  redStar: {
    color: COLORS.red,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: BACKGROUND_COLORS.white,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
  },
});

export default PayThruAppScreen;
