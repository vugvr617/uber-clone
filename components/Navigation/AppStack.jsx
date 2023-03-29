import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import EatsScreen from '../../screens/EatsScreen';
import MapScreen from '../../screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='MapScreen' component={MapScreen} />
      <Stack.Screen name='EatsScreen' component={EatsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
