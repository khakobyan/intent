import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InitialStack } from './initial_stack';

export const Routes = () => {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}
