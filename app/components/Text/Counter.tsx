import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../business/hooks';
// import {useAppSelector} from './business/hooks';
//   const counterValue = useAppSelector(state => state.counter.value);

const Counter = () => {
  const counterValue = useAppSelector(state => state.counter.value);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtTitle}>Counter</Text>
      <Text style={styles.txtCounter}>{counterValue}</Text>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtCounter: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
  },
});
