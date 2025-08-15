import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import {CaretLeftIcon} from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'

// This component renders a back button with an icon
// It uses TouchableOpacity for touch events and the CaretLeftIcon from Phosphor React Native
// The button navigates back to the previous screen when pressed
// It accepts props for style, icon size, and color customization
// Using phosphor-react-native for the back icon

const BackButton = ({
    style,
    iconSize = 26,
    color = colors.white

}: BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
      <CaretLeftIcon size={verticalScale(iconSize)} color={color} weight='bold' />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{

    }
})