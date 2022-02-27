import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ItemProps {
  imageUrl: string,
  title: string,
  price: number[],
  deliveryTimeEstimation: number[]
}
const {height, width} = Dimensions.get("window");

const Item : React.FC<ItemProps>= ({imageUrl, title,price,deliveryTimeEstimation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../res/images/foodImages/burger.png')}
          style={styles.imageBackground}
        >
          <View style={styles.itemBar}>
            <View style={styles.starContainer}>
              <Icon name='star' style={styles.star}/>
              <Text style={styles.rating}> 4.5 </Text>
            </View>
            <Icon name='heart' style={styles.hart}/>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.rating}>{title}</Text>
        <Text style={styles.rating}>{price[0]} - {price[1]} DT</Text>
        <Text style={styles.rating}>{deliveryTimeEstimation[0]} - {deliveryTimeEstimation[1]} DT</Text>
      </View>
    </View>
  )
}

export default Item

const itemSize = {
  height: height* .28,
  width : width * .95,
}
const styles = StyleSheet.create({
  container: {
    height: itemSize.height,
    width : itemSize.width,
    borderRadius: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    overflow: 'hidden',
    elevation: 6
  },
  imageContainer: {
    flex: 3,
    backgroundColor: 'green',
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain'
  },
  itemBar: {
    width: itemSize.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: itemSize.width * .05,
    paddingTop: itemSize.width * .02,
  },
  hart: {
    color: 'red',
    fontSize: 16,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  star: {
    color: '#fff01a',
    fontSize: 16,
  },
  rating: {
    fontSize: 10
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'green',
  }
})