import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const LoginMemberScreen = () => {
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
        </View>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Login"
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
  formContainer: {
    backgroundColor: '#4474c1',
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    paddingHorizontal: 40,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 10,
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
  },
  showText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#90EE90',
  },
});

export default LoginMemberScreen;
