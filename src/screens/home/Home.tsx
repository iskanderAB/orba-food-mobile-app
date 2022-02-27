import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ListItems from '../../components/listItems/ListItems';
import themColor from '../../utils/colors/themColor';
const Home = () => {
  return (
    <View style={styles.container}>
      <ListItems/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themColor.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
})