import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';

const NewTestamentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="NEW TEST. CLASSES"
          height="35"
          width="42%"
          backgroundColors={['#7bb659', '#7bb659']}
          bottomColor="#66a637"
          borderRadius={5}
        />
        <GradiantButton
          title="LOG OUT"
          height="35"
          width="25%"
          backgroundColors={['#E74C3C', '#C0392B']}
          bottomColor="#A93226"
          borderRadius={5}
        />
        <GradiantButton
          title="Back"
          height="35"
          width="20%"
          fontSize={16}
          backgroundColors={['#fed040', '#fed040']}
          bottomColor="#be9007"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GradiantButton
            title="Matt"
            height="35"
            width="25%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => navigation.navigate('Matt')}
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title="Luke"
            height="35"
            width="25%"
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
            title="John"
            height="35"
            width="25%"
            backgroundColors={['#F8B88C', '#E89A6A']}
            bottomColor="#d67a43"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
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
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#c1c2c0', '#c1c2c0']}
            bottomColor="#8f8f91"
            color="#fff"
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
          />
          <GradiantButton
            title=""
            height="35"
            width="25%"
            backgroundColors={['#9fb8de', '#9fb8de']}
            bottomColor="#4e73b1"
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
    marginTop: 25,
    marginBottom: 16,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
    marginBottom: 16,
  },
});

export default NewTestamentScreen;
