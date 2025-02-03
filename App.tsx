import * as React from 'react';
import { View } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator'
import { Button } from '@react-navigation/elements';

const app=()=> {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </View>
  );
}



export default  app;