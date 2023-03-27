import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { mainStyles } from '../styles/Styles';

const EatsScreen = () => {
  return (
    <SafeAreaView style={mainStyles.views.container}>
      <View style={mainStyles.views.main}>
        <Text>EatsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default EatsScreen;

