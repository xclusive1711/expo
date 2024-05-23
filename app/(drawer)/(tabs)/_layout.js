import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { Feather, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function _layout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerLeft: ({}) => {
        if (route.name === 'profile') {
          return null; // Don't show headerLeft on the profile screen
        }
        return <DrawerToggleButton tintColor='#000' />;
      },
    })}>
      <Tabs.Screen name='feed' options={{
        tabBarIcon: ({color}) => (
          <AntDesign name="home" size={24} color={color} />),
        tabBarLabel: 'Home',
        headerTitle: 'Home',
        headerRight: () => <Button onPress={() => router.push('feed/new')} title='Add Post' color={'blue'} />
      }} />
      <Tabs.Screen name='profile' options={{
        tabBarIcon: ({color}) => (
          <AntDesign name="user" size={24} color={color} />
        ),
        tabBarLabel: 'Profile',
        headerTitle: 'Profile'
      }} />
      <Tabs.Screen name='favourites' options={{
        tabBarIcon: ({color}) => (
          <Feather name="list" size={24} color={color} />
        ),
        tabBarLabel: 'Favorites',
        headerTitle: 'Favorites'
      }} />
    </Tabs>
    
  )
}