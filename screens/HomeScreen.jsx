import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/Navigation/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
  },
});

export default HomeScreen;