import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SliderHome from '../../components/sliderHome/SliderHome'
import ListCategories from '../../components/listCategories/ListCategories'
import { height } from '../../utils/constants/Constants'


const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <SliderHome/>
      <ListCategories/>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({
  container : {
    height: height * .4,
  }
})