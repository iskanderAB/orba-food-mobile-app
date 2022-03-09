import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SliderHome from '../../components/sliderHome/SliderHome'
import ListCategories from '../../components/listCategories/ListCategories'
import { height, width } from '../../utils/constants/Constants'

interface Props { 
  sheetPress: ()=> void,
  setMenu: (menu: string)=> void
}
const HeaderHome: React.FC<Props> = ({sheetPress, setMenu}) => {
  return (
    <View style={styles.container}>
      <SliderHome/>
      <ListCategories sheetPress={sheetPress} setMenu={setMenu}/>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({
  container : {
    height: height * .45,
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: width,
  }
})