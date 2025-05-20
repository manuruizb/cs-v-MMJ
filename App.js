import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import SuperHeroScreen from './src/screens/SuperHeroScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Bienvenidos'}}
        />
        <Stack.Screen name="SuperHeroDetail" component={SuperHeroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}