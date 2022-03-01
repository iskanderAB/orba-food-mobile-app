import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { headerHeight, width } from '../../utils/constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import themColor from '../../utils/colors/themColor';
import OrbaText from '../UI/orbaText/OrbaText';
import Fonts from '../../res/fonts/Fonts';

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name='bell-o' style={styles.notifIcon} />
      <OrbaText style={styles.textHeader}>مرحبا بك اسكندر </OrbaText>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        width: '100%',
        backgroundColor: themColor.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: width *.05,
        elevation: 10
    },
    notifIcon: {
      fontSize: 20,
      color: themColor.darkGray
    },
    textHeader: {
      color: themColor.darkGray,
      fontSize: 16
    }
})