import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { width } from '../../../utils/constants/Constants';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/Entypo';
import Fonts from '../../../res/fonts/Fonts';

const ItemCategory = ({src}:{src: string}) => {
  useEffect(()=>{
    console.log('debug =>',src);
  },[])
  return (
    <View style={styles.container}>
      {
        src === 'dots' ?
        <Icon 
          name='dots-three-horizontal'
          style={styles.dots}  
        />
        :
        <Image 
          source={{uri: src}}
          style={styles.image}  
        />
      }
    </View>
  )
}
export default ItemCategory

const styles = StyleSheet.create({
    container: {
        width: width * .2,
        height : '100%',
        backgroundColor: themColor.lightGray,
        // marginHorizontal: width * .025,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image :{
      width: width * .2,
      height: '95%',
      resizeMode: 'contain'
    },
    dots: {
      fontSize: 36,
      color: themColor.darkGray
    }
})