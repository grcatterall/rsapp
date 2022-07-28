import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from './SettingsScreen';
import Account from './Account';


const Stack = createNativeStackNavigator();

function MyAccount() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={SettingsScreen}/>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

export default MyAccount;