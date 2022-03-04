import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../item/Item'
import SliderHome from '../sliderHome/SliderHome'
import HeaderHome from '../../containers/headerHome/HeaderHome'



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
const ListItems = ({sheetPress}:{sheetPress: ()=> void}) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HeaderHome sheetPress={sheetPress}/>}
      ListFooterComponent={<View><Text> copyrigth 2022  </Text></View>}
      renderItem={({ item, index, separators })=>(
        <Item {...item}/>
      )}
      keyExtractor={(item,index)=> `item-${index}`}
    />
  )
}

export default ListItems

const styles = StyleSheet.create({})