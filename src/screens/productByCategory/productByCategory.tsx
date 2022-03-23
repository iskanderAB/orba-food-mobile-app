import React from 'react'
import {  StyleSheet, FlatList, SafeAreaView} from "react-native";
import productByCategoryItem , { Props }from '../../components/productByCategoryItem/productByCategoryItem';
const DATA = [ 
    {
      id: "1",
      name:"Burgers de poulet farcis au fromage et ...",
      prix: "8.500 DT - 16.500 DT",
      time:"30 min",
      img:"https://us.123rf.com/450wm/alexraths/alexraths2002/alexraths200200041/140781570-burger-frais-et-savoureux-sur-fond-sombre.jpg?ver=6",
     rate:"★ 4.5" ,
     nameResto:"Burger King",
     logoResto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png"
    },
    {
      id: "2",
      name:"Burgers de poulet farcis au fromage et ...",
      prix: "8.500 DT - 16.500 DT",
      time:"30 min",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWsIInhUeAnK-bvK5LMo_qIbj5kY8yiTcA&usqp=CAU",
     rate:"★ 4.5" ,
     nameResto:"Burger King",
     logoResto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png"
    },
    {
      id: "3",
      name:"Burgers de poulet farcis au fromage et ...",
      prix: "8.500 DT - 16.500 DT",
      time:"30 min",
      img:"https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg",
     rate:"★ 4.5" ,
     nameResto:"Burger King",
     logoResto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png"
    },
    {
      id: "4",
      name:"Burgers de poulet farcis au fromage et ...",
      prix: "8.500 DT - 16.500 DT",
      time:"30 min",
      img:"https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg",
     rate:"★ 4.5" ,
     nameResto:"Burger King",
     logoResto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png"
    },
    {
        id: "5",
        name:"Burgers de poulet farcis au fromage et ...",
        prix: "8.500 DT - 16.500 DT",
        time:"30 min",
       // img:"https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg",
       rate:"★ 4.5" ,
       nameResto:"Burger King",
       logoResto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png"
      },
  ];
const productByCategory = () => {
    const renderItem = ({ item }: {item: Props}) => {
        return (
          <productByCategoryItem {...item} />
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
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      padding:10,
    },
  });
export default productByCategory