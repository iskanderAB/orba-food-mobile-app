import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header/Header';
import ListItems from '../../components/listItems/ListItems';
import themColor from '../../utils/colors/themColor';
const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <ListItems/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: themColor.white,
    }
})