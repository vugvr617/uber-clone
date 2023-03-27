import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainStyles } from '../styles/Styles';
import NavOptions from '../components/Navigation/NavOptions';
import {API_KEY} from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = () => {
  return (
    <SafeAreaView style={mainStyles.views.container}>
      <View style={mainStyles.views.main}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <GooglePlacesAutocomplete
          styles={styles.input}
          placeholder='Where From?'
          debounce={400}
          returnKeyType="search"
          enablePoweredByContainer={false}
          query={{key: API_KEY, lang: 'en'}}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

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

export default HomeScreen;
