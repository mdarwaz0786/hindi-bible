import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';

const EditProfileScreen = () => {
  const navigation = useNavigation();

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
          <Text style={styles.label}>Your Name (आपका नाम)</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mobile (मोबाइल)</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email (ईमेल)</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="NEXT"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="orange"
          borderRadius={5}
          onPress={() => navigation.navigate('LoginMember')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
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
  formContainer: {
    backgroundColor: BACKGROUND_COLORS.skyBlue,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 20,
    paddingHorizontal: 40,
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
  },
});

export default EditProfileScreen;
