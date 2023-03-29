import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import { optionsData } from './optionsData';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../../store/locationSlice';

const NavOptions = () => {
  const [error, setError] = useState(null);
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      {optionsData.map((item, index) => {
        return (<TouchableOpacity
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          key={index}
          style={styles.navContainer}
          disabled={!origin.coordinates}
        >
          <View>
            <Image style={styles.image} source={item.source} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.icon}>
            <Icon name='arrowright' color='white' type='antdesign' />
          </View>
        </TouchableOpacity>);
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navContainer: {
    backgroundColor: '#e6e6ea',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 6,
  },
  image: { width: 120, height: 120, resizeMode: 'contain' },
  title: { marginVertical: 8, fontWeight: 600, fontSize: 16 },
  icon: {
    backgroundColor: '#000000',
    alignSelf: 'flex-start',
    borderRadius: 50,
    padding: 6,
  },
});

export default NavOptions;
