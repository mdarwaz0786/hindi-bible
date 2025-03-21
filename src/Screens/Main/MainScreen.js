import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const MainScreen = () => {
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
          width="30%"
          gradientType="red"
          borderRadius={5}
        />
        <GradiantButton
          title="Home"
          height="35"
          width="30%"
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.button}>
        <GradiantButton
          title="MENU"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="blue"
          borderRadius={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Study"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('BibleStudy')}
          />
          <GradiantButton
            title="Books"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Videos"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Audios"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Literature"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Imp. Info."
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="TGC Photos"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Children Bible"
            titl2="School (CBS)"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="DEVOTION"
            height="45"
            width="45%"
            gradientType="golden"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="45"
            width="45%"
            gradientType="gray"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title=""
            height="45"
            width="45%"
            gradientType="gray"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="45"
            width="45%"
            gradientType="gray"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
      </View>
      <View style={styles.button}>
        <GradiantButton
          title="Contact Us"
          height="35"
          width="40%"
          fontSize={16}
          gradientType="green"
          borderRadius={5}
          onPress={() => navigation.navigate('ContactUs')}
        />
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
    marginVertical: 10,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default MainScreen;
