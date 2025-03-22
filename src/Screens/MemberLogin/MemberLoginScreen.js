import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const MemberLoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
          <View style={styles.buttonContainer}>
            <GradiantButton
              title="CHANGE USERNAME - PASSWORD"
              height="40"
              width="100%"
              fontSize={13}
              fontWeight="400"
              gradientType="green"
              borderRadius={5}
            />
            <GradiantButton
              title="Forgot username / Password"
              height="40"
              width="100%"
              fontWeight="400"
              fontSize={15}
              gradientType="orange"
              borderRadius={5}
            />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="LOG IN"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="orange"
          borderRadius={5}
          onPress={() => navigation.navigate('Main')}
        />
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              IS PHONE PAR PEHLE SE HI EK ACCOUNT REGISTERED HAI – KRIPAYA USI USERNAME PASSWORD SE LOG IN KIJIYE
            </Text>
            <GradiantButton
              title="OK"
              height="35"
              width="30%"
              fontSize={16}
              gradientType="orange"
              borderRadius={5}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
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
    paddingTop: 25,
    paddingHorizontal: 40,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  formTitle: {
    fontSize: 16,
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
    fontSize: 14,
    color: COLORS.black,
  },
  showButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  showText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.lightGreen,
  },
  buttonContainer: {
    rowGap: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: BACKGROUND_COLORS.darkRed,
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default MemberLoginScreen;
