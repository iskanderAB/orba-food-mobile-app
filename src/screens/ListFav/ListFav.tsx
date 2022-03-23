import React from "react";
import { FlatList, SafeAreaView, StyleSheet} from "react-native";
import ListFavItem, { Props } from "../../components/ListFavItem/ListFavItem";

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

const ListFav = () => {
  const renderItem = ({ item }: {item: Props}) => {
    return (
      <ListFavItem {...item} />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

});

export default ListFav;