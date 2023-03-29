import React from 'react';
import OriginScreen from '../../screens/Home/OriginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestiationScreen from '../../screens/Home/DestiationScreen';

const Stack = createNativeStackNavigator();

const RideStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Origin">
        <Stack.Screen name='Origin' component={OriginScreen}/>
        <Stack.Screen name="Destination" component={DestiationScreen}/>
    </Stack.Navigator>
  );
};

export default RideStack;
