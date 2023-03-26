import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import EatsScreen from './screens/EatsScreen';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'> 
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Map" component={MapScreen}/>
            <Stack.Screen name="Eats" component={EatsScreen}/>
          </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
