import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="BACK"
          height="30"
          width="25%"
          fontSize={16}
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.button}>
            <GradiantButton
              title="HOME PAGE"
              height="35"
              width="35%"
              fontSize={14}
              fontWeight={500}
              gradientType="lightBlue"
              borderRadius={5}
              onPress={() => navigation.navigate('Home')}
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
    marginTop: 25,
  },
  button: {
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: BACKGROUND_COLORS.warmTan,
    marginTop: 20,
  },
  infoContainer: {
    backgroundColor: BACKGROUND_COLORS.deepBrown,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
});

export default PaymentSuccessScreen;
