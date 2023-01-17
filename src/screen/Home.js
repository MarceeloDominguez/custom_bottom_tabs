import React from 'react';
import {View, Text} from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: '#1B2430',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
        Home
      </Text>
    </View>
  );
}
