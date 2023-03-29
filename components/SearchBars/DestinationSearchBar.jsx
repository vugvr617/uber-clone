import React from 'react';
import { API_KEY } from '@env';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../../store/locationSlice';
import { useNavigation } from '@react-navigation/native';

const DestinationSearchBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <GooglePlacesAutocomplete
      styles={searchBarStyle}
      placeholder='Where To?'
      fetchDetails={true}
      onPress={(data, details = null) => {
        const locationDetails = {
          coordinates: details.geometry.location,
          description: data.description,
        };
        navigation.navigate('Destination');
        dispatch(setDestination(locationDetails));
      }}
      debounce={400}
      minLength={2}
      returnKeyType='search'
      enablePoweredByContainer={false}
      query={{ key: API_KEY, lang: 'en' }}
    />
  );
};

const searchBarStyle = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 15,
  },
  textInput: {
    fontSize: 18,
    paddingHorizontal: 0,
    backgroundColor: '#d8d8d8',
    borderRadius: 2,
    paddingHorizontal: 6,
    height: 45,
  },
  textInputContainer: {
    backgroundColor: '#d8d8d8',
    borderRadius: 2,
    paddingHorizontal: 2,
    height: 45,
  },
});

export default DestinationSearchBar;
