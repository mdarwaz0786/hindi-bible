import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import Button from '../../Components/Button/Button.js';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="Home"
          height="30"
          width="25%"
          gradientType="yellow"
          borderRadius={5}
          fontSize={15}
          onPress={() => navigation.navigate('Home')}
        />
        <GradiantButton
          title="Log Out"
          height="30"
          width="25%"
          gradientType="red"
          borderRadius={5}
          fontSize={15}
        />
        <GradiantButton
          title="Back"
          height="30"
          width="25%"
          gradientType="purple"
          borderRadius={5}
          fontSize={15}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Menu"
          height="35"
          width="25%"
          fontSize={15}
          backgroundColor="#3669c3"
          borderRadius={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Bible Study"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('BibleStudy')}
          />
          <GradiantButton
            title="Books"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Book')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Videos"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Videos')}
          />
          <GradiantButton
            title="Audios"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Audio')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Literature"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Literature')}
          />
          <GradiantButton
            title="Zaruri Suchna"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('ZaruriSuchna')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="TGC Photos"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('TgcPhoto')}
          />
          <GradiantButton
            title="Children Bible"
            title2="School (CBS)"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15.5}
            fontWeight="500"
            onPress={() => navigation.navigate('ChildrenBibleSchool')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Devotion"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Devotion')}
          />
          <GradiantButton
            title="Teen Bible"
            title2="School (TBS)"
            height="45"
            width="45%"
            gradientType="orange"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('TeenBibleSchool')}
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
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Edit Profile"
            height="35"
            width="45%"
            gradientType="green"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Order History"
            height="35"
            width="45%"
            gradientType="green"
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
          width="35%"
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
    columnGap: 20,
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
