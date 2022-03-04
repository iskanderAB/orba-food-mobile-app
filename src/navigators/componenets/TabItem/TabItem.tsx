import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import themColor from '../../../utils/colors/themColor';

const TabItem = ({ name }:{ name: string }) => {
  return (
    <View style={styles.container}>
      <Icon name={name}  style={styles.icon} />
    </View>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themColor.ligthWhite,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      color: themColor.darkGray,
      fontSize: 26
    }
})