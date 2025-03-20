import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const BibleStudyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="MENU"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#587dc8', '#587dc8']}
          bottomColor="#3867b8"
          borderRadius={5}
          onPress={() => navigation.navigate('Main')}
        />
        <GradiantButton
          title="LOG OUT"
          height="40"
          width="30%"
          backgroundColors={['#E74C3C', '#C0392B']}
          bottomColor="#A93226"
          borderRadius={5}
        />
      </View>
      <View style={styles.button}>
        <GradiantButton
          title="Bible Study"
          height="40"
          width="35%"
          fontSize={16}
          backgroundColors={['#7bb659', '#7bb659']}
          bottomColor="#66a637"
          borderRadius={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Books"
            height="45"
            width="48%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('BibleBooks')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Subjects"
            height="45"
            width="48%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Reading"
            height="45"
            width="48%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Drama"
            height="45"
            width="48%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
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
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default BibleStudyScreen;
