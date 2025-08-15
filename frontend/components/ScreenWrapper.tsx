import { View, Text, Platform, Dimensions, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'
import { colors } from '@/constants/theme';
//This component serves as a wrapper for screens, allowing for consistent styling and layout
// It can include features like background patterns, modal support, and opacity settings
// The ScreenWrapperProps interface defines the expected properties for this component

//We are going to use this wrapper in all screens to maintain a consistent layout and styling

const {height} = Dimensions.get('window');

// The ScreenWrapper component can be used to wrap other components, providing a consistent layout and styling
// It can also handle background patterns, modal states, and opacity settings for the wrapped content

const ScreenWrapper = ({
    style,
    children,
    showPattern = false,
    isModal = false,
    bgOpacity = 1
} : ScreenWrapperProps) => {
    // This component is a wrapper for screens, allowing for consistent styling and layout
    let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 40;
    let paddingBottom = 0;

    if (isModal) {
        paddingTop = Platform.OS === 'ios' ? height * 0.02 : 45;
        paddingBottom = height * 0.02;
    }
  return (
    <ImageBackground
    style={{
        flex: 1,
        backgroundColor: isModal ? colors.white : colors.neutral900
    }}
    imageStyle = {{opacity: showPattern ? bgOpacity : 0}}
    source={require('@/assets/images/bgPattern.png')}
    >
      <View
        style={[
            {
                paddingTop,
                paddingBottom,
                flex: 1,
            },
            style
        ]}
      >
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
        {children}
      </View>
    </ImageBackground>
  )
}

export default ScreenWrapper