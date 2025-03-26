import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import Button from '../../Components/Button/Button.js';
import MediaDownload from '../../Components/Media/MediaDownload.js';

const ChildrenBibleScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>
      <View style={styles.buttonTop}>
        <GradiantButton
          title="Home"
          height="30"
          width="20%"
          gradientType="yellow"
          borderRadius={5}
          fontSize={15}
          onPress={() => navigation.navigate('Home')}
        />
        <GradiantButton
          title="Menu"
          height="30"
          width="20%"
          gradientType="blue"
          borderRadius={5}
          fontSize={15}
          onPress={() => navigation.navigate('Main')}
        />
        <GradiantButton
          title="Log Out"
          height="30"
          width="20%"
          gradientType="red"
          borderRadius={5}
          fontSize={15}
        />
        <GradiantButton
          title="Back"
          height="30"
          width="20%"
          fontSize={15}
          gradientType="purple"
          borderRadius={5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Children Bible School (CBS)"
          height="40"
          width="60%"
          fontSize={15}
          backgroundColor={BACKGROUND_COLORS.green}
          borderRadius={5}
        />
      </View>
      <View style={styles.mediaContainer}>
        <MediaDownload
          title="Sample Video"
          type="video"
          source={require('../../Assets/myvideo.mp4')}
          size="20MB"
        />

        <MediaDownload
          title="Sample Audio"
          type="audio"
          source={require('../../Assets/myaudio.mp3')}
          size="5MB"
        />

        <MediaDownload
          title="Sample Image"
          type="image"
          source={require('../../Assets/videoThumbnail.jpeg')}
          size="3MB"
        />

        <MediaDownload
          title="Sample Pdf"
          type="pdf"
          source={require('../../Assets/mypdf.pdf')}
          size="2MB"
        />

        <MediaDownload
          type="link"
          title="Visit Google"
          source={{ uri: 'https://www.google.com' }}
        />
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
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 15,
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
  mediaContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ChildrenBibleScreen;
