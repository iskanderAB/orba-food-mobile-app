import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../item/Item'



const data = [
{
  imageUrl: '../res/images/foodImages/burger.png',
  title: 'Neapolitan Pizza Traditional Toppings',
  price: [8.500, 16500],
  deliveryTimeEstimation: [40,30]
}, 
{
  imageUrl: '../res/images/foodImages/burger.png',
  title: 'Neapolitan Pizza Traditional Toppings',
  price: [8.500, 16500],
  deliveryTimeEstimation: [40,30]
}, 
{
  imageUrl: '../res/images/foodImages/burger.png',
  title: 'New York-Style Pizza Traditional Toppings:',
  price: [8.500, 16500],
  deliveryTimeEstimation: [40,30]
},
{
  imageUrl: '../res/images/foodImages/burger.png',
  title: 'pizza',
  price: [8.500, 16500],
  deliveryTimeEstimation: [40,30]
}, 

]
const ListItems = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index, separators })=>(
        <Item {...item}/>
      )}
      keyExtractor={(item,index)=> `item-${index}`}
    />
  )
}

export default ListItems

const styles = StyleSheet.create({})