import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesScreen from '../screens/countries';
import UniversitiesScreen from '../screens/universities';

const Stack = createStackNavigator();

export const InitialStack = () => {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Countries"
        component={CountriesScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Universities"
        component={UniversitiesScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
