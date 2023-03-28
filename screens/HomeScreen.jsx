import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainStyles } from '../styles/Styles';
import NavOptions from '../components/Navigation/NavOptions';
import LocationSearchBar from '../components/LocationSearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={mainStyles.views.container}>
      <View style={mainStyles.views.main}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <LocationSearchBar/>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
