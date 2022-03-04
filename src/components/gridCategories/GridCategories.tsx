import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import themColor from '../../utils/colors/themColor'

const GridCategories = () => {
  return (
    <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12]}
          renderItem={({item}) => (
            <View
              style={styles.container}>
              <View style={styles.subContainer}>  
                <Image
                    style={styles.imageThumbnail}
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={{
                    uri: 'https://pngimg.com/uploads/sandwich/sandwich_PNG67.png',
                    }}
                />
              </View>  
              <Text style={styles.text} > كسكروت </Text>
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
  )
}

export default GridCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 2,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
    },
    text: { 
        color: themColor.darkGray,
        textAlign: 'center'
    },
    subContainer: {
        backgroundColor: themColor.white,
        borderRadius: 5,
        margin: 3
    }
})