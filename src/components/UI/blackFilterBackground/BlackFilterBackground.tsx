import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import themColor from '../../../utils/colors/themColor'
import { height, width } from '../../../utils/constants/Constants'
import Animated, { SharedValue, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated'

interface propsType {
  hidePress : () => void ,
  translateY: SharedValue<number>
}
const BlackFilterBackground: React.FC<propsType> = ({translateY, hidePress}) => {

  const derivedDisplay = useDerivedValue(()=>{
    return (translateY.value >= 0 
        ? 'none' 
        : 'flex'
      );
  })

  const animatedStyle = useAnimatedStyle(()=>{
    return {
        display: derivedDisplay.value
    }
  })

  return (
    <TouchableWithoutFeedback
      onPress={hidePress}
    >
      <Animated.View 
        style={[styles.container, animatedStyle]}
      />
    </TouchableWithoutFeedback>
  )
}

export default BlackFilterBackground

const styles = StyleSheet.create({
    container: {
        backgroundColor: themColor.black,
        width: width,
        height: height,
        Top: height,
        position: 'absolute',
        elevation:7,
        opacity: .3
    }
})