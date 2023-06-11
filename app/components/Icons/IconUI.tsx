import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IconUI = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://w7.pngwing.com/pngs/100/522/png-transparent-computer-icons-plus-and-minus-signs-symbol-plus-miscellaneous-cross-sign-thumbnail.png',
        }}
        style={{width: 30, height: 30}}
      />
    </View>
  );
};

export default IconUI;

const styles = StyleSheet.create({});
