import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { itemSliderWidth, silderHomeheight, width } from '../../../utils/constants/Constants'

const SliderItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../res/images/foodImages/top-view.png')}/>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingVertical : silderHomeheight * .02,
        paddingLeft: width * .025,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: itemSliderWidth,
        height: '95%',
        borderRadius: itemSliderWidth* .03
    }
})