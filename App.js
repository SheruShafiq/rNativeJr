import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Color from './screens/colorPallet';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Sherooooooooooooooooo',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
          name="ColorPalette"
          component={Color}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
