/* eslint-disable no-extra-semi */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import formatTime from '../../Helper/formatTime';

const MediaDownload = ({ type, title, source, size }) => {
  const [duration, setDuration] = useState(0);

  const handleDownload = () => {
    console.log(`Downloading: ${title}`);
  };

  const handleOpenLink = () => {
    if (source?.uri) {
      Linking.openURL(source.uri).catch(err => console.error("Couldn't open URL", err));
    };
  };

  return (
    <View style={styles.messageContainer}>
      <View style={styles.mediaRow}>
        {type === 'video' && (
          <View style={styles.mediaItem}>
            <Video
              source={source}
              style={styles.videoPlayer}
              resizeMode="cover"
              onLoad={(data) => setDuration(data.duration)}
              paused
            />
            <Text style={styles.mediaInfo}>{formatTime(duration)}</Text>
          </View>
        )}

        {type === 'audio' && (
          <Icon name="audiotrack" size={50} color="#0088cc" style={styles.mediaItem} />
        )}

        {type === 'image' && (
          <Image source={source} style={styles.image} />
        )}

        {type === 'pdf' && (
          <Icon name="picture-as-pdf" size={50} color="red" style={styles.mediaItem} />
        )}

        {type === 'link' && (
          <View style={styles.linkContainer}>
            <Icon name="link" size={50} color="#0088cc" />
            <View style={styles.linkTextContainer}>
              <Text style={styles.mediaTitle}>{title}</Text>
              <TouchableOpacity onPress={handleOpenLink}>
                <Text style={styles.linkText}>{source.uri}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {type !== 'link' && (
          <View style={styles.mediaDetails}>
            <Text style={styles.mediaTitle}>{title}</Text>
            <Text style={styles.mediaInfo}>{size}</Text>
            <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
              <Icon name="file-download" size={20} color="white" />
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: '#e0f2f1',
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: '80%',
  },
  mediaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaItem: {
    marginHorizontal: 8,
  },
  videoPlayer: {
    width: 140,
    height: 80,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  mediaTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  mediaInfo: {
    fontSize: 12,
    color: '#555',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkTextContainer: {
    marginLeft: 10,
  },
  linkText: {
    fontSize: 12,
    color: '#0088cc',
    textDecorationLine: 'underline',
  },
  mediaDetails: {
    marginLeft: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0088cc',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  downloadText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default MediaDownload;
