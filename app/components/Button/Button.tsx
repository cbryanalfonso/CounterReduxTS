import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  onPress: () => void;
}

const ButtonUI = ({children, onPress}: Props) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </>
  );
};

export default ButtonUI;

const styles = StyleSheet.create({});
