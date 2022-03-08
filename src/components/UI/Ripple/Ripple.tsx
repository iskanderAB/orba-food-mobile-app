import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView, TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, measure, runOnJS, useAnimatedGestureHandler, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import themColor from '../../../utils/colors/themColor'

interface RippleProps {
    style?: StyleProp<ViewStyle>,
    onTap?: () => void
}

const Ripple:FC<RippleProps> = ({style, onTap, children}) => {
  const squareRef = useAnimatedRef<Animated.View>();
  const scale = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const tapGestureHandlerEvent = Gesture.Pan()
  .onBegin(()=>{
    const layout = measure(squareRef);
    width.value = layout.width;
    height.value = layout.height;
    scale.value = withTiming(1,{duration: 300});
  })
  .onFinalize(()=>{
    if (onTap)
      runOnJS(onTap)();
    if(scale.value === 1 )  // ki el button ykoun wsol lel max scale 
      scale.value = 0  
    else 
      scale.value = withTiming(1,{duration: 300},(f)=>{  // ki yhez el user sob3o fisa3 mel button 
          if(f)
            scale.value = 0;
      })
  })

  ;

  const circleStyle = useAnimatedStyle(()=>{
    return {
        width: '100%',
        height: "100%",
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 50,
        transform: [
            {scale: scale.value}
        ],
        opacity : .1
    }
  })
  return (
    <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={tapGestureHandlerEvent} >
                    <Animated.View
                        style={styles.ripple}
                        ref={ squareRef }
                    >
                        {children}
                        <Animated.View style={circleStyle} />
                    </Animated.View>
            </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default Ripple

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themColor.ligthWhite,
    },
    ripple: {
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 30,
        flex:1,
      },
})