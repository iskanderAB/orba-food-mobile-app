import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Item from '../item/Item'
import SliderHome from '../sliderHome/SliderHome'
import HeaderHome from '../../containers/headerHome/HeaderHome'
import { itemSize, tabBarHeight } from '../../utils/constants/Constants'
import Animated, { SharedValue, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'



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
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
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
   
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
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
   
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 
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
   
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.500, 16500],
    deliveryTimeEstimation: [40,30],
    liked: true
  }, 

]

interface Props { 
  sheetPress: () => void,
  velocity: SharedValue<number|undefined>,
  scrollY: SharedValue<number|undefined>
}

const ListItems: React.FC<Props> = ({sheetPress,velocity,scrollY}) => {
  
  
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event)=>{
      velocity.value = event.velocity?.y;
      scrollY.value = event.contentOffset.y;
      console.log('test mohammed ', event);
      // console.log("scrolle home ", velocity.value?.toFixed(1));
    },
    onEndDrag: (event)=>{
      // console.log(event);
    },
    onBeginDrag:(event)=>{
     
    },
    onMomentumBegin:(event)=>{

    },
  })

  const renderItem= useCallback(({ item, index }:{index: number,item: any})=>(
    <Item {...item} index={index}/>
  ),[])
  const getItemLayout=useCallback((_, index:number) => (
    {length: itemSize.height, offset: itemSize.height * index, index}
  ),[])
  return (
    <Animated.FlatList
      scrollEventThrottle={60}
      pinchGestureEnabled
      data={data}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HeaderHome sheetPress={sheetPress}/>}
      ListFooterComponent={<View style={{marginBottom : tabBarHeight,backgroundColor: 'red' ,justifyContent: 'center',alignItems: 'center'}}><Text> loading ...  </Text></View>}
      renderItem={renderItem}
      updateCellsBatchingPeriod={60}
      removeClippedSubviews={false} //Fixme 
      bounces={false}
      maxToRenderPerBatch={15}
      ListEmptyComponent={<Text> list is empty </Text>}
      initialNumToRender={20}
      getItemLayout={getItemLayout}
      keyExtractor={(item,index)=> `item-${index}`}
      onEndReached={()=>console.log("kammalt")}
    />
  )
}

export default ListItems;

const styles = StyleSheet.create({})