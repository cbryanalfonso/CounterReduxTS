import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../business/hooks';
import {increment, decrement} from '../../business/counterSlice';

const ButtonUI = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonUI;

const styles = StyleSheet.create({});
