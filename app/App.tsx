import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './business/store';
import Counter from './screens/components/Counter'
import ButtonUI from './screens/components/Button';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <ButtonUI/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
