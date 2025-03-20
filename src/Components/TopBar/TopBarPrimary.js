import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TopBarPrimary = () => {
  return (
    <View style={styles.topSection}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../../Assets/cross-icon.png')} />
      </View>
      <View>
        <Text style={styles.heading}>THE GOOD CROSS</Text>
        <Text style={styles.subHeading}>ministry</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  iconContainer: {
    marginLeft: 1,
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  heading: {
    color: '#967f31',
    fontWeight: '500',
    fontSize: 20,
  },
  subHeading: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '500',
    color: '#556943',
  },
});

export default TopBarPrimary;
