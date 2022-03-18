import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity , Image , View} from "react-native";

const DATA = [
  {
    id: "1",
    name:"Le lorem ipsum",
    descreption: "Le lorem ipsum, en imprimerie ... ",
    time:"30-40",
    img:"https://us.123rf.com/450wm/alexraths/alexraths2002/alexraths200200041/140781570-burger-frais-et-savoureux-sur-fond-sombre.jpg?ver=6",
   rate:"★★★★" 
  },
  {
    id: "2",
    name:"Le lorem ipsum",
    descreption: "Le lorem ipsum, en imprimerie ... ",
    time:"30-40",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWsIInhUeAnK-bvK5LMo_qIbj5kY8yiTcA&usqp=CAU",
   rate:"★★★★" 
  },
  {
    id: "3",
    name:"Le lorem ipsum",
    descreption: "Le lorem ipsum, en imprimerie ... ",
    time:"30-40",
    img:"https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg",
   rate:"★★★★" 
  },
  {
    id: "4",
    name:"Le lorem ipsum",
    descreption: "Le lorem ipsum, en imprimerie ... ",
    time:"30-40",
    img:"https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg",
   rate:"★★★★" 
  },
];
const Item = ({ item,  backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.item, backgroundColor]}>
    <View style={styles.favItem}>
      <Image style={styles.imageFavItem} source={{uri: item.img}}/>
        <View style={styles.detailsFavItem}> 
            <Text style={styles.nameOfFavProducts}>{item.name}</Text>
            <Text style={styles.descOfFavProducts}>{item.descreption}</Text>
            <Text style={styles.timeOfFavProducts}>{item.time} min</Text>
            <Text style={styles.timeOfFavProducts}>{item.rate}</Text>
        </View>
        <Image style={styles.heartIcon} source={{uri:"https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png"}}/> 
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "#f5f7fa";
    const color = item.id === selectedId ? 'white' : '#686a6e';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white"
  },
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

export default App;