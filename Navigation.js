import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home_screen/HomeScreen.js';
import Lesson1_screen from './screens/Lesson1_screen/Lesson1_screen.js';
import Lesson2_screen from './screens/Lesson2_screen/Lesson2_screen.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lesson 1" component={Lesson1_screen} />
        <Stack.Screen name="Lesson 2" component={Lesson2_screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
