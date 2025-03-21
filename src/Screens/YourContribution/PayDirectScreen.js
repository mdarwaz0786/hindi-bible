import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const PayDirectScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="BACK"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.payDirectContainer}>
        <Text style={[styles.text]}>KRIPAYA PAYMENT KE BAAD HAME SCREENSHOT BHEJ DIJIYE WHATSAPP PAR 7838989070</Text>
      </View>

      <View style={styles.scannerContainer}>
        <Image style={styles.scanner} source={require('../../Assets/scanner.png')} />
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountTitle}>Our Bank Account Details</Text>

        <Text style={styles.infoTitle}>When you send your mooney, please send us your name & mobile number (if you wish) - so we could confirm your payment & acknowledge.</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Bank Name:</Text>
          <Text style={styles.value}>State Bank of India</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Account Holder:</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Account Number:</Text>
          <Text style={styles.value}>1234567890123</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>IFSC Code:</Text>
          <Text style={styles.value}>SBIN0001234</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Branch:</Text>
          <Text style={styles.value}>Connaught Place, New Delhi</Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2CC',
    padding: 10,
  },
  topBar: {
    marginTop: 25,
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  payDirectContainer: {
    backgroundColor: '#900204',
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  scannerContainer: {
    flex: 1,
    marginTop: 20,
  },
  scanner: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  accountContainer: {
    backgroundColor: '#ce9259',
    padding: 20,
    marginVertical: 20,
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  value: {
    fontSize: 16,
    color: '#222',
  },
  infoTitle: {
    backgroundColor: '#f0622b',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    marginBottom: 20,
  },
});

export default PayDirectScreen;
