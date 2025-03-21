import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

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
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity style={styles.showButton} onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? 'eye' : 'eye-off'} size={25} color="#fff" />
            <Text style={styles.showText}>{passwordVisible ? 'Hide Password' : 'Show Password'}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <GradiantButton
              title="Change username - password"
              height="40"
              width="100%"
              fontSize={16}
              backgroundColors={['#7FAF5C', '#5E8C3A']}
              bottomColor="#3f6b26"
              borderRadius={5}
            />
            <GradiantButton
              title="Forgot username / password"
              height="40"
              width="100%"
              fontSize={16}
              backgroundColors={['#f09f61', '#f09f61']}
              bottomColor="#c05a17"
              borderRadius={5}
            />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="LOG IN"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#f09f61', '#f09f61']}
          bottomColor="#c05a17"
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
            <TouchableOpacity style={styles.okButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2CC',
    padding: 20,
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
    backgroundColor: '#4474c1',
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    paddingHorizontal: 40,
    marginVertical: 30,
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
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
    fontSize: 18,
    fontWeight: '400',
    color: '#90EE90',
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
    backgroundColor: '#8e0000',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#f09f61',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  okButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MemberLoginScreen;
