import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import EatsScreen from './screens/EatsScreen';
import MapScreen from './screens/MapScreen';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Home'
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='MapScreen' component={MapScreen} />
            <Stack.Screen name='EatsScreen' component={EatsScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
