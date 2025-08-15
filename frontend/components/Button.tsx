import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from '@/types'
import { colors, radius } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Loading from './Loading'

const Button = ({
    style,
    onPress,
    children,
    loading = false,
}: ButtonProps) => {
    // This component renders a button with customizable styles and functionality
    // It accepts props for style, onPress function, children content, and loading state
    // If loading is true, we can render a loading component or a spinner
    
    if (loading) {
       return(
         <View style={[styles.button, style, {backgroundColor: 'transparent'}]}>
            <Loading/> 
        </View>
       )
    }
  return (
    // TouchableOpacity is used to create a button that responds to touch events
    // This is a button in the button component that shows in the welcome screen
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} >
        {children}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        borderCurve: 'continuous',
        height: verticalScale(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
})