import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeListScreen from './screens/HomeListScreen';
import HomeDetailScreen from './screens/HomeDetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  useEffect(() => {
    console.log('[HomeStack] mounted');
    return () => console.log('[HomeStack] unmounted');
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeList" component={HomeListScreen} options={{ title: 'Pokémon' }} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    console.log('[App] mounted');
    return () => console.log('[App] unmounted');
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
