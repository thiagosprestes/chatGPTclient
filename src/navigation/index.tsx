import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/Home';
import {Routes, RoutesParams} from './routes';
import {TextGenerationScreen} from '../features/TextGeneration';
import {ImageGenerationScreen} from '../features/ImageGeneration';

const Stack = createNativeStackNavigator<RoutesParams>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen
        name={Routes.TextGeneration}
        component={TextGenerationScreen}
      />
      <Stack.Screen
        name={Routes.ImageGeneration}
        component={ImageGenerationScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export {Navigation};
