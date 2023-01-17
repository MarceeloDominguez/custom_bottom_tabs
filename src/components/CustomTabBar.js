import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

export default function CustomTabBar(props) {
  return (
    <View>
      <View style={styles.tabBar} />
      <BottomTabBar {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 15,
    height: 32,
    backgroundColor: '#F77E21',
    borderRadius: 6,
    elevation: 3,
  },
});
