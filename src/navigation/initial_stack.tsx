import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesScreen from '../screens/countries';
import UniversitiesScreen from '../screens/universities';

type StackParamList = {
  Countries: undefined;
  Universities: { country: string };
};

const Stack = createStackNavigator<StackParamList>();

export const InitialStack = () => {
  return (
    <Stack.Navigator initialRouteName='Countries'>
      <Stack.Screen
        name="Countries"
        component={CountriesScreen}
      />
      <Stack.Screen
        name="Universities"
        component={UniversitiesScreen}
        options={({route}) => ({ title: route.params?.country })}
      />
    </Stack.Navigator>
  );
}
