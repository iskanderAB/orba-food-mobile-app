import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, tabBarHeight, width } from '../../../utils/constants/Constants'
import themColor from '../../../utils/colors/themColor'
import TabItem from '../TabItem/TabItem'

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <TabItem name='home-outline'/>
      <TabItem name='search-outline'/>
      <TabItem name='ios-cart-outline'/>
      <TabItem name='heart-outline'/>
      <TabItem name='person-outline'/>
    </View>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    container: {
        height: tabBarHeight,
        width: width ,
        backgroundColor: themColor.ligthWhite,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        elevation: 10,
    }
})