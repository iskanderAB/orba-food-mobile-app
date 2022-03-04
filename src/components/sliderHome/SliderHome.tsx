import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { headerHeight, silderHomeheight } from '../../utils/constants/Constants';
import SliderItem from '../UI/sliderItem/SliderItem';
import Indicator from '../UI/indicator/Indicator';
import Animated, { event, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
const data = [
    {
      imageUrl: '../res/images/foodImages/burger.png',
      title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
      price: [8.500, 16500],
      deliveryTimeEstimation: [40,30],
      liked: true
    }, 
    {
      imageUrl: '../res/images/foodImages/burger.png',
      title: 'Neapolitan Pizza Traditional Toppings',
      price: [8.500, 16500],
      deliveryTimeEstimation: [40,30],
      liked: false
    }, 
    {
      imageUrl: '../res/images/foodImages/burger.png',
      title: 'New York-Style Pizza Traditional Toppings:',
      price: [8.500, 16500],
      deliveryTimeEstimation: [40,30],
      liked: true
    },
    {
      imageUrl: '../res/images/foodImages/burger.png',
      title: 'pizza',
      price: [8.500, 16500],
      deliveryTimeEstimation: [40,30],
      liked: true
    }, 
    
    ]
const SliderHome = () => {

  const scrollX = useSharedValue(0); 

  const animatedHandler = useAnimatedScrollHandler({
    onScroll: (event)=>{
      scrollX.value = event.contentOffset.x;
    }
  })
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.FlatList
          onScroll={animatedHandler}
          data={data}
          renderItem={({item,index})=>(<SliderItem/>)}
          horizontal
        />
      </View>
      <Indicator number={data.length} scrollX={scrollX}  />
    </View>
  )
}

export default SliderHome

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: headerHeight,
        flex: 2
    },
    slider: {
      flex: 20
    },
    list: {
      flex: 3
    }
})