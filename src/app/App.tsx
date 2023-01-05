import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import MainStack from './navigate/navigate';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainStack />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
