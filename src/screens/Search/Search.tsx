import { Image, StyleSheet, FlatList, View, ImageBackground, Text } from 'react-native'
import React from 'react'
import { height, serchItemSize, tabBarHeight, width } from '../../utils/constants/Constants'
import OrbaInput from '../../components/UI/orbaInput/OrbaInput'
import themColor from '../../utils/colors/themColor'
import OrbaText from '../../components/UI/orbaText/OrbaText'
import Fonts from '../../res/fonts/Fonts'

const data = [
  {
    title: "ملاوي",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg"
  },
  {
    title: "ملاوي",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  },
  {
    title: "ملاوي",
    image: "https://cuisine.nessma.tv/uploads/7/2020-11/87e2b10e7697f34480bdedbf76ed04a4.png"
  }
]


const Search = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <OrbaInput  
            mode='light' 
            lang='AR' 
            icon='search' 
            placeholder='بحث ...' />
        </View>
        <View style={styles.body}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({item})=>(
              <View style={{
                width : serchItemSize,
                aspectRatio: 1,
                margin: 2,
                borderRadius: 5,
                overflow: 'hidden'
              }}>
                <ImageBackground source={{uri: item.image}} style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <View style={{ 
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: themColor.lightGreen,
                    opacity: .5
                  }}/>  
                  <OrbaText
                    style={{
                      color: "#dfe7e2",
                      fontFamily: Fonts.bold
                    }}
                  > { item.title } </OrbaText> 
                </ImageBackground>
              </View>
            )}
          />
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:  {
      flex: 1,
      backgroundColor: themColor.ligthWhite,
    },
    header: {
      flex: 1.5,
      justifyContent: "center",
      alignItems: 'center',
    },
    body: {
      flex: 8,
      alignItems: "center",
      paddingBottom: tabBarHeight,
    }
})