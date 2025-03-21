/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const PayThruAppScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="BACK"
          height="35"
          width="25%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={[styles.formTitle, { fontSize: 20, marginBottom: 10, }]}>Payment Gateway</Text>
          <Text style={[styles.formTitle, { fontSize: 14, marginBottom: 20, padding: 5, color: "#fff", backgroundColor: "#ed4f1d" }]}>Credit card/Debit Card/Wallet</Text>
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
              fontWeight={400}
              backgroundColors={['#0a8ed4', '#0a8ed4']}
              bottomColor="#2079a5"
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
    backgroundColor: '#FFF2CC',
  },
  topBar: {
    marginTop: 12,
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#d3a262',
    marginTop: 20,
  },
  formContainer: {
    backgroundColor: '#1f0b02',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    margin: 10,
    padding: 20,
  },
  formTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
  },
  redStar: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default PayThruAppScreen;
