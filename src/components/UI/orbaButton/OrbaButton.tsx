import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import themColor from '../../../utils/colors/themColor';
const {width, height} = Dimensions.get('window');

const OrbaButton = ({color}:{color: string}) => {
  return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          
        </View>
        <View style={styles.textContainer}>
         <Text style={styles.text}>أرسل</Text>
        </View>
      </View>
  );
};

export default OrbaButton;

const styles = StyleSheet.create({
  container: { 
    backgroundColor: themColor.white,
    width: width*.85,
    height: 50,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 23,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  iconContainer: {
    flex: .3,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});
