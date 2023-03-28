import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainStyles } from '../styles/Styles';
import Map from '../components/MapScreen/Map';
import React from 'react';

const MapScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <Map/>
    </View>
  );
};

export default MapScreen;
