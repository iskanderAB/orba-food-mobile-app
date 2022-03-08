import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { headerHeight, width } from '../../utils/constants/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import themColor from '../../utils/colors/themColor';
import OrbaText from '../UI/orbaText/OrbaText';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
      // style={{
      //   backgroundColor: 'red',
      //   width: 100,
      //   height: 100
      // }}
        onPress={()=> {
          console.log("clicked !!"); 
          // navigation.navigate('notification-screen');
        }}
      >
      <Icon name='notifications-outline' style={styles.notifIcon} />
      <OrbaText style={styles.textHeader}> مرحبا بك <OrbaText style={{color : themColor.green}}> اسكندر </OrbaText> </OrbaText>
      </TouchableOpacity>
   </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        width: '100%',
        backgroundColor: themColor.ligthWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: width *.05,
        elevation: 6,
        position: 'absolute',
    },
    notifIcon: {
      fontSize: 26,
      color: themColor.darkGray
    },
    textHeader: {
      color: themColor.darkGray,
      fontSize: 16
    }
})