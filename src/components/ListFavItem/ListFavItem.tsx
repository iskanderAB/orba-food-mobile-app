import React from "react";
import {  StyleSheet, Text, TouchableOpacity , Image , View} from "react-native";

export interface Props {
    id:String;
    name:String;
    descreption:String;
    time:String;
    rate:String;
    img:String;
}
const ListFavItem: React.FC<Props> = ({
    id,
    name,
    descreption,
    time,
    rate,
    img,
    }) => (
  <TouchableOpacity style={[styles.item]}>
    <View style={styles.favItem}>
      <Image style={styles.imageFavItem} source={{uri:img}}/>
        {/* <View style={styles.detailsFavItem}> */}
        <View> 
            <Text style={styles.nameOfFavProducts}>{name}</Text>
            <Text style={styles.descOfFavProducts}>{descreption}</Text>
            <Text style={styles.timeOfFavProducts}>{time} min</Text>
            <Text style={styles.timeOfFavProducts}>{rate}</Text>
        </View>
        <Image style={styles.heartIcon} source={{uri:"https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png"}}/> 
    </View>
  </TouchableOpacity>
);
export default ListFavItem;

const styles = StyleSheet.create({
 item: {
    flexDirection:"row-reverse",
    padding: 12,
    marginVertical:4,
    marginHorizontal: 16,
    borderRadius:10
  },

  favItem:{
    width:"100%",
    flexDirection: 'row',
  },
  nameOfFavProducts:{
    fontSize:16,
    color:"#9e8988",
    marginTop:5
    
  },
  descOfFavProducts:{
    fontSize:10,
    color:"#9e8988",
  },
  timeOfFavProducts:{
    fontSize:12,
    color:"#9e8988",
  },
  
  imageFavItem: {
    width: 80,
    height: 80,
    marginRight:7,
    borderRadius:5
    
  },
  heartIcon: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginTop:20 
  },
  
  
});