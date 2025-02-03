import * as React from 'react';
import { View } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator'

const app=()=> {

  return (  
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
}



export default  app;