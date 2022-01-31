import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const OrbaButton = ({color}:{color: string}) => {
  return (
        <TouchableOpacity activeOpacity={0.9} style={{ elevation: 6}}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Icon name="send" size={30} color={themColor.gray} />
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.text}>أرسل</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    elevation: 6
  },
  text: {
    fontSize: 23,
    marginEnd: '30%',
    color: themColor.gray
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
