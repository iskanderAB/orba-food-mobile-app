import {StyleSheet, Text,  TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {width} from '../../../utils/constants/Constants';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/Entypo';
import OrbaText from '../orbaText/OrbaText';

const ButtonCategory = ({sheetPress}: {sheetPress?: () => void}) => {
  return (
    <TouchableOpacity
        activeOpacity={.6}
        onPress={sheetPress}
    >
        <View style={styles.container}>
        <View style={styles.subContainer}>
        <Icon name="dots-three-horizontal" style={styles.dots} />
      </View>
      <OrbaText style={styles.text}> البقية </OrbaText>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCategory;

const styles = StyleSheet.create({
  container: {
    width: width * .2,
    height :'100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: width*.2 * .05
},
  subContainer: {
    backgroundColor: themColor.white,
    width: width * .2,
    aspectRatio: 1.2,
    flex: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    fontSize: 26,
    color: themColor.darkGray ,
  },
  text: {
    flex: 1,
    color: themColor.darkGray,
    fontSize: 12
  }
  
});
