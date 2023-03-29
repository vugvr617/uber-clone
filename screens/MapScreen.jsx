import { View } from 'react-native';
import React from 'react';
import RideStack from '../components/Navigation/RideStack';
import { ScrollView } from 'react-native';

const MapScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <RideStack />
    </View>
  );
};

export default MapScreen;
