import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { width } from '../../../utils/constants/Constants';
import themColor from '../../../utils/colors/themColor';
import OrbaText from '../orbaText/OrbaText';

interface Props{
  src: string,
  style?:StyleProp<View>,
  setMenu: ()=> void
}
const ItemCategory: React.FC<Props> = ({src, style, setMenu}) => {
  return (
    <TouchableOpacity 
      onPress={()=>setMenu()}
      style={styles.container}
      activeOpacity={.7}  
    >
      <View style={styles.subContainer}>
        <Image 
          source={{uri: src}}
          style={styles.image}  
        />
      </View>      
        <OrbaText style={styles.text}> مرقة </OrbaText>
    </TouchableOpacity>
  )
}
export default ItemCategory

const styles = StyleSheet.create({
    container: {
        width: width * .2,
        height :'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: width*.2 * .05,
    },
    subContainer: {
      backgroundColor: themColor.white,
      width: width * .2,
      aspectRatio: 1.2,
      flex: 3,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image :{
      width: '90%',
      height: '90%',
      maxWidth: '90%',
      maxHeight: '90%',
      resizeMode: 'contain',
    },
    text: {
      flex: 1,
      color: themColor.darkGray,
      fontSize: 12
    }
})