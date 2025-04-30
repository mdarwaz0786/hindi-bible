/* eslint-disable react-native/no-inline-styles */
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary';
import GradiantButton from '../../Components/Button/GradientButton';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors';
import COLORS from '../../Constants/Colors';
import Button from '../../Components/Button/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ArticleScreen = () => {
  const navigation = useNavigation();

  const pdfFile = {
    title: 'TGC Learning Guide',
    fileName: 'tgc_learning_guide.pdf',
    fileSize: '2.3 MB',
    fileUrl: 'https://example.com/tgc_learning_guide.pdf',
  };

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
          title="Articles"
          height="40"
          width="30%"
          fontSize={15}
          backgroundColor={BACKGROUND_COLORS.green}
          borderRadius={5}
        />
      </View>

      <View style={[styles.imageWrapper, { paddingTop: 0 }]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../Assets/videoThumbnail.jpeg')} />
        </View>
        <View style={[styles.descriptionContainer, { marginTop: 0 }]}>
          <Text style={styles.description}>How to learn coding in easy way, If you are using a custom button component, ensure it accepts and applies the style prop correctly.</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.youtube.com')}>
            https://www.youtube.com
          </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.youtube.com')}>
            https://www.youtube.com
          </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.youtube.com')}>
            https://www.youtube.com
          </Text>
        </View>
      </View>

      <View style={styles.pdfWrapper}>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.pdfContainer}>
            <FontAwesome name="file-pdf-o" size={35} color="red" />
            <View style={styles.pdfInfo}>
              <Text style={styles.pdfTitle}>{pdfFile.title} {index + 1}</Text>
              <Text style={styles.pdfDetails}>{pdfFile.fileName} • {pdfFile.fileSize}</Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(pdfFile.fileUrl)}>
              <FontAwesome name="download" size={30} color="#555" />
            </TouchableOpacity>
          </View>
        ))}
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
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  imageWrapper: {
    backgroundColor: BACKGROUND_COLORS.deepBrown,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 0,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 10,
  },
  publishedOn: {
    color: '#ddd',
    fontSize: 13,
    marginTop: 5,
  },
  descriptionContainer: {
    backgroundColor: BACKGROUND_COLORS.white,
    padding: 16,
    paddingTop: 10,
    marginTop: 10,
    borderRadius: 3,
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    color: '#555',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  pdfWrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  pdfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: BACKGROUND_COLORS.white,
    padding: 16,
    marginBottom: 16,
  },
  pdfInfo: {
    flex: 1,
    marginLeft: 10,
  },
  pdfTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  pdfDetails: {
    fontSize: 14,
    color: '#777',
  },
});

export default ArticleScreen;
