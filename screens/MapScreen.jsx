import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainStyles } from '../styles/Styles';
import React from 'react';

const MapScreen = () => {
  return (
    <SafeAreaView style={mainStyles.views.container}>
      <View style = {mainStyles.views.main}>
        <Text>MapScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
