import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class ProfileView extends Component {

  render() {
    return (
      <ScrollView style={styles.container}> 
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://www.mycuisine.com/wp-content/uploads/2018/12/burger-rossini-1048x590.jpg'}}/>
                <Text style={styles.name}>
                  Description:
                </Text>
                <Text style={styles.descreption}>
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                </Text>
                <Text style={styles.name}>
                  Type:
                </Text>
                <Text style={styles.remarque}>
                  choose 1
                </Text>
                <View style={styles.typeContainer}>
                  <Text style={styles.nameoftype}>
                    chawarma
                  </Text>
                  <View style={styles.CircleShapeView}>
                  </View>
                </View>
                <View style={styles. horizontalrule}></View>
                <View style={styles.typeContainer}>
                  <Text style={styles.nameoftype}>
                    escalope
                  </Text>
                  <View style={styles.CircleShapeView}>
                  </View>
                </View>
                <View style={styles. horizontalrule}></View>
                <View style={styles.typeContainer}>
                  <Text style={styles.nameoftype}>
                    kabeb
                  </Text>
                  <View style={styles.CircleShapeView}>
                  </View>
                </View>
            </View>
          </View>
          <View style={styles.containerOfOptions}>  
                <Text style={styles.name}>
                  Options:
                </Text>
                <Text style={styles.remarque}>
                  Free
                </Text>

                <View style={styles.optionItem}>
                <Image style={styles.imageOption} source={{uri: 'https://thumbs.dreamstime.com/b/ketchup-ramekin-clipping-path-8331965.jpg'}}/>
                <Text style={styles.nameOfItemOption}>
                Sauce ketchup
                  </Text>
                </View>
                <View style={styles. horizontalrule}></View>
                <View style={styles.optionItem}>
                <Image style={styles.imageOption} source={{uri: 'https://thumbs.dreamstime.com/b/ketchup-ramekin-clipping-path-8331965.jpg'}}/>
                <Text style={styles.nameOfItemOption}>
                Sauce ketchup
                  </Text>
                </View>
                <View style={styles. horizontalrule}></View>
                <View style={styles.optionItem}>
                <Image style={styles.imageOption} source={{uri: 'https://thumbs.dreamstime.com/b/ketchup-ramekin-clipping-path-8331965.jpg'}}/>
                <Text style={styles.nameOfItemOption}>
                Sauce ketchup
                  </Text>
                </View>
                
          </View>
          <View style={styles.containerOfNote}> 
          <Image style={styles.iconNote} source={{uri: 'https://freepikpsd.com/file/2019/10/comment-png-icon-8-1-Transparent-Images.png'}}/> 
          <Text style={styles.requestes}>
                Any special requestes ?
          </Text>
          <Text style={styles.AddNote}>
                Add note
          </Text>
          
          </View>
          <View style={styles.containerOfOptions}>  
                <Text style={styles.name}>
                  Related Products
                </Text>
                

                <View style={styles.optionItem}>
                <Image style={styles.imageRelatedProducts} source={{uri: 'https://st.depositphotos.com/1000647/4654/i/950/depositphotos_46544497-stock-photo-can-of-pepsi-cola.jpg'}}/>
                <View style={styles.detailsRelatedProducts}> 
                <Text style={styles.nameOfRelatedProducts}>
                Sauce ketchup
                  </Text>
                  <Text style={styles.descOfRelatedProducts}>
                  Le lorem ipsum, en imprimerie ...
                  </Text>
                  <Text style={styles.timeOfIRelatedProducts}>
                30-40 min
                  </Text>
                  <Text style={styles.timeOfIRelatedProducts}>
                  ★★★★
                  </Text>
                  </View>
                  <Text style={styles.priceOfIRelatedProducts}>
                  8.500 TND
                  </Text>
                </View>
                <View style={styles.horizontalrule}></View>
          </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ebebeb",
    flex: 1, 
  },
  header:{
    backgroundColor: "white",
    borderRadius:5
  },

  containerOfOptions:{
    backgroundColor: "white",
    marginTop:5,
    borderRadius:5,
    
  },
  containerOfNote:{
    backgroundColor: "white",
    marginTop:5,
    borderRadius:5,
    flexDirection: 'row',
  },
  optionItem:{
    width:"100%",
    flexDirection: 'row',
  },
 
  avatar: {
    width: 370,
    height: 230,
    marginBottom:10,
  },
  imageOption: {
    width: 40,
    height: 40,
    margin:10,
    marginTop:0,
  },
  imageRelatedProducts: {
    width: 80,
    height: 80,
    margin:10,
    marginTop:0,
  },
  iconNote: {
    width: 30,
    height: 30,
    margin:5,
  },
  
  name:{
    fontSize:18,
    color:"#9e8988",
    marginLeft:6,
    fontWeight:'600',
    textAlign:'left',
    marginBottom:5
  },
  nameoftype:{
    fontSize:18,
    color:"#9e8988",
    marginLeft:6,
  
    textAlign:'left',
    marginBottom:5
  },
  nameOfItemOption:{
    fontSize:18,
    color:"#9e8988",
    marginLeft:2,
    marginTop:6
  },
  nameOfRelatedProducts:{
    fontSize:16,
    color:"#9e8988",
    marginTop:5
    
  },
  descOfRelatedProducts:{
    fontSize:10,
    color:"#9e8988",
  },
  timeOfIRelatedProducts:{
    fontSize:12,
    color:"#9e8988",
  },
  priceOfIRelatedProducts:{
    fontSize:15,
    color:"#9e8988",
    marginLeft: 'auto',
    marginRight:8,
    marginTop:25
  },
  requestes:{
    fontSize:15,
    color:"#9e8988",
    marginLeft:10,
    marginTop:6
  },
  AddNote:{
    fontSize:12,
    color:"#f07416",
    marginLeft: 'auto',
    marginRight:8,
    
    marginTop:12
  },
  remarque:{
    fontSize:11,
    color:"#9e8988",
    marginLeft:6,
    fontWeight:'200',
    textAlign:'left',
    marginBottom:5,
    marginTop:-7
  },
  descreption:{
    fontSize:15,
    color:"#9e8988",
    marginLeft:6,
    fontWeight:'300',
    textAlign:'left',
    marginBottom:5
  },
  typeContainer:{
    flexDirection: 'row',
  },
  CircleShapeView: {
    width: 25,
    height: 25,
    borderRadius: 150/2,
    backgroundColor: '#00BCD4',
    // marginLeft:225,
    marginLeft: 'auto',
    marginRight:6
    
    
},
horizontalrule: {
  borderBottomColor: '#9e8988',
  paddingBottom:6,
  marginBottom:6,
  borderBottomWidth: 0.2,
  marginLeft:10,
  marginRight:10
    
},
 
  });
