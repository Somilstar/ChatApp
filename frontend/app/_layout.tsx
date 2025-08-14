import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'



// This component is used to hide the white screen from top and bottom of the app
// The header is hidden for a cleaner look
// The Stack component is imported from 'expo-router' to handle navigation
const _layout = () => {
  return  <Stack screenOptions={{headerShown: false}} />;
  
}

export default _layout