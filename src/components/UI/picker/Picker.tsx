import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../../res/fonts/Fonts';

const {width} = Dimensions.get("window");
const sizeWidth = width*.8;
const items = [
  {value: 'انثى', icon: 'female'},
  {value: 'ذكر', icon: 'male'}
];
const Picker = () => {
  const [show , setShow] = useState(false);  
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Pressable 
      onPress={()=> {
        setShow(true);
        console.log("pressed")
      }}
      style={styles.container}
    >
      <Icon name={selectedItem.icon} size={20} color={themColor.gray} />
      <Text style={styles.selectedItem}>{selectedItem.value}</Text>
      {show && 
          <View style={styles.listContainer}>
            {
              items.map((item,index) => (
                <TouchableOpacity
                  // activeOpacity={.9}
                  key={"Picker"+index}
                  onPress={()=> {
                    console.log('pressed' ,index);
                    setSelectedItem(items[index]);
                    setShow(false);
                  }}
                >
                  <View style={[styles.itemContainer,{backgroundColor: item.value === selectedItem.value ?  themColor.lightGray : 'transparent'}]}>                 
                    <Icon name={item.icon} size={20} color={themColor.gray} />
                    <Text style={styles.listItem}>
                      {item.value}
                    </Text>
                  </View>   
                </TouchableOpacity> 
              ))
            }
          </View>   
        }
    </Pressable>
  )
}

export default Picker

const styles = StyleSheet.create({
    container: {
      width: width*.80,
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      paddingLeft: 20,
      backgroundColor: themColor.white,
      height:50,
      minHeight: 50,
      flexDirection: 'row-reverse',
      zIndex: 999
    },
    listContainer: { 
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: themColor.white,
      top:0,
      left:0,
      right:0,
      padding: 10
    },
    itemContainer: {
      alignItems: 'center',
      paddingLeft: 20,
      height:50,
      minHeight: 50,
      flexDirection: 'row-reverse',
      zIndex: 999,
    },
    listItem: { 
        textAlign: 'right',
        fontFamily: Fonts.regular,
        marginRight: 10,
        paddingRight: 25,
        color: themColor.darkGray
    },
    selectedItem: {
      fontFamily: Fonts.regular,
      textAlign: 'right',
      marginRight: 10,
      paddingRight: 25,
      color: themColor.darkGray
    },
})