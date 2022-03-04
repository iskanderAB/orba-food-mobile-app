import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import themColor from '../../../utils/colors/themColor';
import { itemSliderWidth, width } from '../../../utils/constants/Constants';

const Indicator = ({ number, scrollX }:{number: number,scrollX: SharedValue<number>}) => {
  return (
    <View style={styles.container}>
      {
        [...new Array(number)].map((_,i)=>{
            const animatedStyle = useAnimatedStyle(()=>{
                 const updatedWidth = interpolate(scrollX.value,
                    [(i-1)* itemSliderWidth, i *itemSliderWidth, ((i+1) * itemSliderWidth)-itemSliderWidth*.1],
                    [itemSliderWidth*.02, itemSliderWidth*.06, itemSliderWidth*.02],
                    Extrapolate.CLAMP
                  )
                  const updatedOpacity = interpolate(scrollX.value,
                    [(i-1)* itemSliderWidth, i *itemSliderWidth, (i+1) * itemSliderWidth],
                    [.5, 1, .5],
                    Extrapolate.CLAMP
                  )
                  return {
                      width : updatedWidth,
                      opacity: updatedOpacity
                  }
            })
            return <Animated.View 
                    style={[styles.ball,animatedStyle]}
                    key={`indicator_${i}`}
                />
            }
            ) 
      }
    </View>
  )
}

export default Indicator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    ball: {
        height: itemSliderWidth*.02,
        backgroundColor: themColor.green,
        borderRadius: 5,
        marginHorizontal: 2
    }
})