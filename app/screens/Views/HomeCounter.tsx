import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonUI from '../../components/Button/Button';
import {increment, decrement} from '../../business/counterSlice';
import {useAppDispatch} from '../../business/hooks';
import Counter from '../../components/Text/Counter';
import IconUI from '../../components/Icons/IconUI';

const HomeCounter = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <View style={styles.subContainerActions}>
        <ButtonUI
          onPress={() => {
            dispatch(increment());
          }}>
          <IconUI />
        </ButtonUI>
        <ButtonUI
          onPress={() => {
            dispatch(decrement());
          }}>
          <IconUI />
        </ButtonUI>
      </View>
    </SafeAreaView>
  );
};

export default HomeCounter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  subContainerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
