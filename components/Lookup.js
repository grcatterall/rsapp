import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen';
import DetailsScreen from './DetailsScreen';
import Dashboard from './Dashboard';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Lookup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lookup" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Lookup;