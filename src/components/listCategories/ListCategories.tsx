import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemCategory from '../UI/itemCategory/ItemCategory'
import { width } from '../../utils/constants/Constants';
import ButtonCategory from '../UI/buttonCategory/ButtonCategory';


const data = [
    {
      imageUrl: 'https://pngimg.com/uploads/sandwich/sandwich_PNG67.png',
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


interface Props { 
  sheetPress: ()=> void,
  setMenu: (menu: string)=> void
}
const ListCategories: React.FC<Props> = ({sheetPress, setMenu})=> {
  return (
    <View style={styles.container}>
      <ItemCategory src={'https://pngimg.com/uploads/sandwich/sandwich_PNG67.png'} setMenu={()=>setMenu("half")} />
      <ItemCategory src={'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96784.png'} setMenu={()=>setMenu("half")}/>
      <ItemCategory src={'https://pngimg.com/uploads/sandwich/sandwich_PNG67.png'} setMenu={()=>setMenu("full")} />
      <ItemCategory src={'https://pngimg.com/uploads/sandwich/sandwich_PNG67.png'} setMenu={()=>setMenu("full")} />
      <ButtonCategory sheetPress={sheetPress}/>
    </View>
  )
}

export default ListCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'space-between',
        paddingVertical: 5,
        paddingHorizontal: width *.1,

    }
})