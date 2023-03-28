import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrigin, setOrigin } from '../../store/locationSlice';
import MapView, { Marker } from 'react-native-maps';
import React from 'react';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const dispatch = useDispatch();

  return (
    <MapView
      style={{ height: '50%' }}
      initialRegion={{
        latitude: origin.coordinates.lat,
        longitude: origin.coordinates.lng,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }}
      onPress={(coordinate) => {
        const newLocation = {
          lat: coordinate.nativeEvent.coordinate.latitude,
          lng: coordinate.nativeEvent.coordinate.longitude,
        };
        dispatch(setOrigin({...origin, coordinates: newLocation}));
        console.log()
      }}
      title='Where from ?'
      mapType={'mutedStandard'}
    >
      <Marker
        title='Where from ?'
        coordinate={{
          latitude: origin.coordinates.lat,
          longitude: origin.coordinates.lng,
        }}
        description={origin.description}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
