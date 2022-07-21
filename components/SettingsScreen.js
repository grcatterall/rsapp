import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {navigation.navigate('My Account')}} style={{padding: 10, borderBottomColor: '#facade', borderBottomWidth: 1}}>
        <Text>My Account</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;