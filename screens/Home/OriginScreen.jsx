import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import Map from '../../components/MapScreen/Map';
import DestinationSearchBar from '../../components/SearchBars/DestinationSearchBar';
import { selectOrigin } from '../../store/locationSlice';
import { useSelector } from 'react-redux';

const OriginScreen = () => {
  const origin = useSelector(selectOrigin);

  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <Map />
      <View
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#d8d8d8',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 18 }}>Where are you going?</Text>
      </View>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <DestinationSearchBar />
      </View>
    </View>
  );
};

export default OriginScreen;

const styles = StyleSheet.create({});
