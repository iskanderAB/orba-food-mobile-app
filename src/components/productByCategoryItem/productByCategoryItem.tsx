import React from 'react'
import {  StyleSheet, Text , Image , View ,ImageBackground} from "react-native";
import { width } from '../../utils/constants/Constants';
import OrbaText from '../UI/orbaText/OrbaText';
export interface Props {
    id:String;
    name:String;
    prix:String;
    time:String;
    rate:String;
    img:String;
    nameResto:String;
    logoResto:String;
}
const ProductByCategoryItem: React.FC<Props> = ({
    id,
    name,
    prix,
    time,
    rate,
    img,
    nameResto,
    logoResto
    }) => (
    <View style={styles.container}>  
      <ImageBackground style={styles.Item} source={{uri:img}}> 
          <Text style={styles.rate}>{rate}</Text>
          <Image style={styles.heartIcon} source={{uri:"https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png"}}/>
          {/* <Image style={styles.imageProduct} source={{uri:img}}/> */}
          <View style={styles.footerBackground} >
          <View style={ styles.resto }>
            <View style={styles.containerLogo}>
              <Image style={styles.imageresto} source={{uri:logoResto}}/>
            </View>
            <Text style={styles.nameOfResto}>{nameResto}</Text>
          </View>
          <View style={styles.timeContainer}>
            <OrbaText style={styles.timeOfCommande}> {time} دقيقة </OrbaText>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.nameOfProduct}>{name}</Text>
      <Text style={styles.prixOfProducts}>{prix}</Text>
    </View>
);
export default ProductByCategoryItem;
const styles = StyleSheet.create({
    container:{
      marginBottom:5, 
    },
    Item:{
        marginBottom:2,
        alignItems: 'center',
        height: 140,
        borderRadius:5,
        overflow: 'hidden'
    },
    nameOfProduct:{
        fontSize:15,
        color:"#9e8988",
        alignSelf: 'flex-start',
        fontWeight:'400'
      },
      prixOfProducts:{
        fontSize:13,
        color:"#9e8988",
        alignSelf: 'flex-start',
        fontWeight:'400'
      },
      rate:{
        fontSize:13,
        color:"#9e8988",
         
        transform: [{translateY: 5},{translateX: -143}],
      },

      imageProduct: {
        // width: "100%",
        // height: 140,
        // borderRadius:5,
        // marginBottom:2,
       //  
       //position: 'relative',
      },
      footerBackground: {
        position: "absolute",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
        bottom: 5
      },
      resto: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between' 
      },
      containerLogo:{
        backgroundColor:"white",
        padding:5,
        borderRadius: 15,
        marginRight: 5
      },
      imageresto: {
        width: 20,
        height: 20,
      },
      nameOfResto: {
        fontSize:12,
        color:"white",
        backgroundColor:  'rgba(0,0,0,.3)',
        paddingHorizontal: 6,
        paddingVertical: 1,
        borderRadius:5
      },
      timeContainer: {
        borderRadius:5,
        backgroundColor:'#ededed',
        padding:2
      },
      timeOfCommande:{
        fontSize:10,
        color:"#9e8988",
      },
      heartIcon: {
        width: 18,
        height: 18,
        transform: [{translateY: 5},{translateX: 143}],
         
      },

});