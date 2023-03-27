import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import { optionsData } from './optionsData';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavOptions = () => {
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
    justifyContent: 'space-between',
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
