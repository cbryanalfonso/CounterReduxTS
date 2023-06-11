import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './business/store';
import AppNavigator from './AppNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
