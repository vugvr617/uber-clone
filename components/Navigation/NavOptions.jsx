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

const NavOptions = () => {
  return (
    <View>
      <FlatList
        data={optionsData}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.navContainer}>
            <View>
              <Image style={styles.image} source={item.source} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.icon}>
              <Icon
                name='arrowright'
                color='white'
                type='antdesign'
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#e6e6ea',
    marginLeft: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 6,
  },
  image: { width: 120, height: 120, resizeMode: 'contain' },
  title: { marginVertical: 8, fontWeight: 600, fontSize: 16 },
  icon: { backgroundColor: '#000000', alignSelf: 'flex-start', borderRadius: 50, padding: 6},
});

export default NavOptions;
