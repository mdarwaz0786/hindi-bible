/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.homeButton}>
        <GradiantButton
          title="Home"
          height="35"
          width="30%"
          backgroundColors={['#F7D154', '#E3B500']}
          bottomColor="#c89600"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.contactSection}>
        <View style={[styles.section, { marginTop: 10 }]}>
          <Text style={styles.text}>कृपया कॉल न करें</Text>
          <Text style={styles.text}>Please Do Not Call</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>केवल व्हाट्सएप या ईमेल करें</Text>
          <Text style={styles.text}>ONLY WHATSAPP OR EMAIL</Text>
        </View>

        <View style={[styles.section, { marginBottom: 40 }]}>
          <Text style={styles.text}>WHATSAPP : 7838989070</Text>
          <Text style={styles.text}>EMAIL : hindibiblestudy.com@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2CC',
  },
  topBar: {
    marginTop: 20,
    marginBottom: 30,
  },
  homeButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 60,
  },
  contactSection: {
    backgroundColor: '#960001',
    marginTop: 30,
  },
  section: {
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

export default ContactUsScreen;
