import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import React from 'react';
import OrbaText from '../orbaText/OrbaText';
import themColor from '../../../utils/colors/themColor';

const {width, height} = Dimensions.get('window');

const OrbaButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.85} >
    <View style={styles.container}>
      <OrbaText style={styles.text}> دخول </OrbaText>
    </View>
  </TouchableOpacity>
  );
};

export default OrbaButton;

const styles = StyleSheet.create({
    container: { 
      borderColor: themColor.gray,
      width: width*.80,
      height: 50,
      borderRadius: 10,
      margin: 1,
      flexDirection: 'row',
      backgroundColor:  themColor.orngeGold,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: themColor.white,
      fontSize: 15
    }
  });
