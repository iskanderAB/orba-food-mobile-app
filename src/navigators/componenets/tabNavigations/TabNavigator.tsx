import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, tabBarHeight, width } from '../../../utils/constants/Constants'
import themColor from '../../../utils/colors/themColor'
import TabItem from '../TabItem/TabItem'
import Animated, { StyleProps } from 'react-native-reanimated'

const TabNavigator = ({tabBarAnimation}:{tabBarAnimation: StyleProps}) => {
  return (
    <Animated.View style={[styles.container,tabBarAnimation]}>
      <TabItem name='home-outline'/>
      <TabItem name='search-outline'/>
      <TabItem name='ios-cart-outline'/>
      <TabItem name='heart-outline'/>
      <TabItem name='person-outline'/>
    </Animated.View>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    container: {
        height: tabBarHeight,
        width: width ,
        backgroundColor: themColor.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        elevation: 10,
        opacity: 1
    }
})