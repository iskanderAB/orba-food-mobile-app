import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrbaText from '../orbaText/OrbaText';

const {width, height} = Dimensions.get('window');

const GoogleSignInButton = () => {
  return (
        <TouchableOpacity activeOpacity={0.9} style={{ elevation: 6}}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../../res/logos/google.png')} 
                style={{width:30,height:30}} 
              />
            </View>
            <View style={styles.textContainer}>
            <OrbaText style={styles.text}>Google</OrbaText>
            </View>
          </View>
        </TouchableOpacity>
  );
};

export default GoogleSignInButton;

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
    marginEnd: '30%',
    color: themColor.darkGray
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
