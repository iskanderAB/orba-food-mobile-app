import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { silderHomeheight } from '../../utils/constants/Constants'
import { FlatList } from 'react-native-gesture-handler'
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
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=>(
            <Image 
                source={require('../../res/images/foodImages/top-view.png')}/>
        )}
        horizontal
      />
    </View>
  )
}

export default SliderHome

const styles = StyleSheet.create({
    container: {
        height: silderHomeheight,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})