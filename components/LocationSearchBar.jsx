import React from 'react';
import {API_KEY} from "@env";
import { StyleSheet } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { selectOrigin } from '../store/locationSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setOrigin } from '../store/locationSlice';

const LocationSearchBar = () => {
    const origin = useSelector(selectOrigin);
    const dispatch = useDispatch();

    return (<GooglePlacesAutocomplete
        styles={styles.input}
        placeholder='Where From?'
        fetchDetails={true}
        onPress={(data, details = null) => {
            console.log(details.geometry.location);
            const locationDetails = {coordinates: details.geometry.location, description: data.description};
            dispatch(setOrigin(locationDetails));
        }}
        debounce={400}
        minLength={2}
        returnKeyType="search"
        enablePoweredByContainer={false}
        query={{key: API_KEY, lang: 'en'}}
      />)
}

const styles = StyleSheet.create({
    input: {
      container: {
        flex: 0,
      },
      textInput: {
        fontSize: 18,
        paddingHorizontal: 0,
      },
    },
  });
  

export default LocationSearchBar;