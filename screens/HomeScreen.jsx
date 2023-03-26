import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/Navigation/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
      <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '90%',
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center' 
  },
});

export default HomeScreen;
