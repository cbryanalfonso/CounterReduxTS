import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ButtonUI from '../../components/Button/Button';
import {increment, decrement} from '../../business/counterSlice';
import {useAppDispatch} from '../../business/hooks';
import Counter from '../../components/Text/Counter';
import IconUI from '../../components/Icons/IconUI';
// import {Tab, Tabs} from './Tab';
import StepperExample from './Steps';
import HorizontalLinearAlternativeLabelStepper from './StepsMUI';
import {Tabs} from './TabsRefactor';
import HomeProducts from '../Products/HomeProducts';

const HomeCounter = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Tabs>
        <Tab name="tab1" label="Tab 1">
          <Text>Hola amigos como les va?</Text>
        </Tab>
        <Tab name="tab2" label="Tab 2">
        </Tab>
      </Tabs> */}
      {/* <StepperExample /> */}
      {/* <HorizontalLinearAlternativeLabelStepper/> */}
      <Tabs
        data={[
          {name: 'tab1', label: 'Tab 1', content: <HomeProducts />},
          {name: 'tab2', label: 'Tab 2', content: <HorizontalLinearAlternativeLabelStepper />},
          {name: 'tab3', label: 'Tab 3', content: <HomeProducts />},
          {name: 'tab4', label: 'Tab 4', content: <HorizontalLinearAlternativeLabelStepper />},
          {name: 'tab5', label: 'Tab 5', content: <HomeProducts />},
          {name: 'tab6', label: 'Tab 6', content: <HorizontalLinearAlternativeLabelStepper />},
          {name: 'tab7', label: 'Tab 7', content: <HomeProducts />},
        ]}>
      </Tabs>
      {/* <Counter />
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
      </View> */}
    </SafeAreaView>
  );
};

export default HomeCounter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  subContainerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
