import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import themColor from '../../utils/colors/themColor';
import { useAppSelector, useAppDispatch } from '../../_redux/app/hooks';
import { decrement, increment } from '../../_redux/features/main/mainSlice';
const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>Home {count} </Text>
      <Button onPress={()=> dispatch(increment()) } title="click me"/>
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