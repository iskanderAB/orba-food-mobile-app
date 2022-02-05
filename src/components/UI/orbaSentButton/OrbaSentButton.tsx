import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrbaText from '../orbaText/OrbaText';

const {width, height} = Dimensions.get('window');
type Mode = "dark"|"light"|"transparent";
const OrbaSentButton = ({icon,title,mode,onPress}:{icon:string,title:string,mode:Mode,onPress?:any}) => {
  return (
        <TouchableOpacity 
          activeOpacity={0.85} 
          onPress={onPress} >
          <View style={[styles.container,
                    {backgroundColor: mode==='light'? themColor.white : 'transparent',
                     borderWidth: mode === 'light' ? 0 : 1,
                     elevation: mode === 'light'? 6 : 0
                    }]}>
            <View style={styles.iconContainer}>
              <Icon name={icon} size={30} color={themColor.gray} />
            </View>
            <View style={styles.textContainer}>
            <OrbaText style={styles.text}>{title}</OrbaText>
            </View>
          </View>
        </TouchableOpacity>
  );
};

export default OrbaSentButton;

const styles = StyleSheet.create({
  container: { 
    borderColor: themColor.gray,
    width: width*.85,
    height: 50,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
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
