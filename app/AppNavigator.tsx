import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeCounter from './screens/Views/HomeCounter';
import HomeProducts from './screens/Products/HomeProducts';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: 'home-outline',
    component: HomeCounter,
  },
  {
    route: 'HomeProducts',
    label: 'Products',
    icon: 'home-outline',
    component: HomeProducts,
  },
];

const AppNavigator = () => {
  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: true,
                headerShown: false,
                // tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    );
  };

  const TabNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={BottomTabs} />
        <Stack.Screen name="HomeCounter" component={HomeCounter} />
      </Stack.Navigator>
    );
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
