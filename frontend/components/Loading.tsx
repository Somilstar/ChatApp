import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'

// This component renders a loading spinner with customizable size and color
// It uses the ActivityIndicator component from React Native
// Default size is 'large' and default color is set to primaryDark from the theme

const Loading = ({
    size = 'large',
    color = colors.primaryDark
}: ActivityIndicatorProps) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}
export default Loading

const styles = StyleSheet.create({})