import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'

// Register component is used for user registration
// It includes a KeyboardAvoidingView to handle keyboard interactions on mobile devices
// The ScreenWrapper provides consistent styling and layout
// The Typo component is used for displaying text with specific styles

const Register = () => {
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior= {Platform.OS == 'ios'? "padding": "height"} >
    
    <ScreenWrapper showPattern={true}>
        <View style={styles.container}>
            <View style={styles.header}>
            <BackButton iconSize={28}/>    

            </View>
        </View>
    </ScreenWrapper>
    
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'space-between',
    },
    header:{
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingY._25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content:{
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20,
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
});