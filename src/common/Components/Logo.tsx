import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Logo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 15,
      }}>
      <Image
        style={styles.logo}
        source={require('../../common/icons/logo.png')}
      />
      <Text style={styles.titleText}>AzaliaNow</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 24,
    paddingLeft: 15,
  },
  logo: {
    width: 36,
    height: 36,
  },
});
