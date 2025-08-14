import { View, Text, StyleSheet, StatusBar} from 'react-native'
import React, { use, useEffect } from 'react'
import { colors } from '@/constants/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

// This component serves as a splash screen for the application
// It displays a centered image with a dark background
// The StatusBar is set to light content for better visibility against the dark background

const SplashScreen = () => {

    const router = useRouter();
    // Navigate to the welcome screen after a delay
    useEffect(() => {
        setTimeout(() => {
            router.replace("/(auth)/Welcome");
        }, 1500); // 1.5 seconds delay
    }, []);



  return  <View style= {styles.container}>

    <StatusBar barStyle={'light-content'} backgroundColor={colors.neutral900} />

    <Animated.Image 
    source={require('@/assets/images/splashImage.png')}
    entering={FadeInDown.duration(700).springify()}
    style={styles.logo}
    resizeMode={ 'contain'}
    />


    </View>
  
}

export default SplashScreen;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral900,
    },
    logo:{
        height: "23%",
        aspectRatio: 1,
    }

});