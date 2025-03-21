import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const BibleBooksScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="LOG OUT"
          height="35"
          width="28%"
          gradientType="red"
          borderRadius={5}
        />
        <GradiantButton
          title="Back"
          height="35"
          width="28%"
          fontSize={16}
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <GradiantButton
          title="Bible Books"
          height="40"
          width="40%"
          fontSize={16}
          gradientType="green"
          borderRadius={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Old Testament"
            height="40"
            width="50%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('OldTestament')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="New Testament"
            height="40"
            width="50%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('NewTestament')}
          />
        </View>
      </View>
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
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    marginTop: 50,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 22,
  },
});

export default BibleBooksScreen;
