import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import themColor from '../../utils/colors/themColor';

interface Context {
  y: number;
}
const {height, width} = Dimensions.get('window');

type BottomSheetProps = {
  children?: React.ReactNode;
  translateY : SharedValue<number>
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps,BottomSheetProps>(({children, translateY},ref) => {

  const active = useSharedValue(true);

  useEffect(()=>{
    console.log("init status ", active.value);
  })
  const context = useSharedValue<Context>({
    y: 0,
  });
  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withTiming(destination,{
        duration: 300 ,
        easing: Easing.linear});
    active.value = !active.value;
    console.log("status changed ",active.value) 
  }, []);

  const isActive = useCallback(() => active.value, []);

  useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo]);

  const gesture = Gesture.Pan()
    .onStart(event => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      console.log(translateY.value, height);
      translateY.value = Math.max(
        event.translationY + context.value.y,
        -height,
      );
    })
    .onEnd(() => {
      if(translateY.value  < -height / 1.5 )
        translateY.value = withTiming(-height,{
          duration: 300 ,
          easing: Easing.linear});
      else if (translateY.value > -height/ 4 ){
        scrollTo(height);
      }
    });

  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    borderRadius: interpolate(
      translateY.value,
      [-(height * 0.8), -height],
      [25, 1],
      Extrapolate.CLAMP,
    ),
  }));
  return (
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.container, sheetAnimatedStyle]}>
            <View style={styles.line} />
            <View style={styles.subContainer}>
              {children}
            </View>
          </Animated.View>
        </GestureDetector>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: themColor.ligthWhite,
    top: height,
    borderRadius: 25,
    alignItems: 'center',
    position: 'absolute',
    elevation:11,
    paddingHorizontal:20
  },
  line: {
    backgroundColor: '#3d3633c2',
    height: 3,
    width: 40,
    marginTop: 10,
    borderRadius: 2,
  },
  subContainer: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: width *.025,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  }
});
