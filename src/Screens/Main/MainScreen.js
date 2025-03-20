import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

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
          height="40"
          width="30%"
          backgroundColors={['#E74C3C', '#C0392B']}
          bottomColor="#A93226"
          borderRadius={5}
        />
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
      <View style={styles.button}>
        <GradiantButton
          title="MENU"
          height="40"
          width="30%"
          fontSize={16}
          backgroundColors={['#587dc8', '#587dc8']}
          bottomColor="#3867b8"
          borderRadius={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Study"
            height="45"
            width="45%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('BibleStudy')}
          />
          <GradiantButton
            title="Books"
            height="45"
            width="45%"
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
            title="Videos"
            height="45"
            width="45%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Audios"
            height="45"
            width="45%"
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
            title="Literature"
            height="45"
            width="45%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Imp. Info."
            height="45"
            width="45%"
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
            title="TGC Photos"
            height="45"
            width="45%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Children Bible"
            titl2="School (CBS)"
            height="45"
            width="45%"
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
            title="DEVOTION"
            height="45"
            width="45%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="45"
            width="45%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
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
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="45"
            width="45%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
        </View>
      </View>
      <View style={styles.button}>
        <GradiantButton
          title="Contact Us"
          height="40"
          width="45%"
          fontSize={16}
          backgroundColors={['#7FAF5C', '#5E8C3A']}
          bottomColor="#3f6b26"
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
    marginTop: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default MainScreen;
