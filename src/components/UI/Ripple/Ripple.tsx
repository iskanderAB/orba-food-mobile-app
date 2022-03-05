import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView, TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, measure, useAnimatedGestureHandler, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import themColor from '../../../utils/colors/themColor'

interface RippleProps {
    style?: StyleProp<ViewStyle>,
    onTap?: () => void
}

const Ripple:FC<RippleProps> = ({style, onTap, children}) => {
  const squareRef = useAnimatedRef<Animated.View>();
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const scale = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const tapGestureHandlerEvent = Gesture.Tap()
  .onStart((event)=>{
    const layout = measure(squareRef);
    width.value = layout.width;
    height.value = layout.height;

    positionX.value = event.x;
    positionY.value = event.y;

    scale.value = 0;
    scale.value = withTiming(1,{duration: 400});
    console.log("clicked on item");
  });

  const circleStyle = useAnimatedStyle(()=>{
    const circleRaduis = Math.sqrt((width.value**2) + (height.value**2));
    return {
        width: circleRaduis*2,
        height: circleRaduis*2,
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: circleRaduis,
        top: positionY.value - circleRaduis,
        left: positionX.value - circleRaduis,
        transform: [
            {scale: scale.value}
        ],
        opacity : interpolate(scale.value,[0,.8],[.2,0],Extrapolate.CLAMP)
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
    },
    ripple: {
        // backgroundColor: themColor.ligthWhite,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 100,
        flex:1,
        aspectRatio: 1
        // iOS
        // shadowOpacity: 0.2,
        // shadowOffset: { width: 0, height: 0 },
        // shadowRadius: 20,
        // Android
        // elevation: 6,
      },
})