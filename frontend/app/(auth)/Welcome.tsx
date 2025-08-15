import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { Background } from '@react-navigation/elements';
import { verticalScale } from '@/utils/styling';
import Animated, { FadeIn } from 'react-native-reanimated';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

// ScreenWrapper Component is used here to provide consistent styling and layout
// Typo Component is used for displaying text with specific styles
// The welcome screen displays the app name "Bubbly" prominently in the center
// Button Component is included for future functionality, such as navigation or actions
//if i add loading = true in button it will show loading component, <button loading = {true}>, otherwise it will show the children
//Using router from expo-router to navigate to the next screen when the button is pressed

const Welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper showPattern={true} >
    <View style={styles.container}> 
        <View style={{alignItems: 'center'}}>
        <Typo color= {colors.white} size={43} fontWeight={'900'}>
            Bubbly
        </Typo>
        </View>

    <Animated.Image
    entering={FadeIn.duration(700).springify()}
    source={require("../../assets/images/welcome.png")}
    style={styles.welcomeImage}
    resizeMode= {'contain'}
    />

    <View>
        <Typo color={colors.white} size={33} fontWeight={'800'} >
            Stay connected
        </Typo>
         <Typo color={colors.white} size={33} fontWeight={'800'} >
            with friends
        </Typo>
         <Typo color={colors.white} size={33} fontWeight={'800'} >
            and family
        </Typo>
    </View>


    <Button style={{backgroundColor: colors.white}} onPress={()=> router.push('/(auth)/Register')} >
        <Typo size={23} fontWeight={'bold'} >Get Started</Typo>
    </Button>

    </View>
    </ScreenWrapper>
  )
}

export default Welcome;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: spacingX._20,
        marginVertical: spacingY._10,
    },
    Background:{
        flex: 1,
        backgroundColor: colors.neutral900,
    },
    welcomeImage:{
        height: verticalScale(300),
        aspectRatio: 1,
        alignSelf: 'center',
    },
});

