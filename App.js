import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import NavOptions from './components/Navigation/NavOptions';

export default function App() {
  return (
    <SafeAreaProvider style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
  },
});
