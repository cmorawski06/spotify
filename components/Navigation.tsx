import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home'
import Library from '../screens/Library'
import Search from '../screens/Search'
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  // Dodaj inne ekrany tutaj
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#5abc62',
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Library" component={Library}/>
      {/* Dodaj inne ekrany tutaj */}
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
