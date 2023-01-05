import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Logo} from '../../common/Components/Logo';
import {SplashScreenProps} from '../../app/navigate/navigate';

export const SplashScreen = ({navigation}: SplashScreenProps) => {
  setTimeout(() => {
    navigation.navigate('TaskList');
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};
