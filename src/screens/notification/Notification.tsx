
import React  from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Header from "../../components/header/Header";
import NotificationItem, { Props } from "../../components/notificationItem/NotificationItem";
import themColor from "../../utils/colors/themColor";
import { headerHeight } from "../../utils/constants/Constants";

const DATA = [
  {
    id: "1",
    title:"Le lorem ipsum",
    descreption: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification ",
    date:"52 minutes",
    img:"https://www.mycuisine.com/wp-content/uploads/2018/12/burger-rossini-1048x590.jpg",
    flagicon:"https://skyfood.tn/photo1/rychle-obcerstvenie-haccp.png"
  },
  {
    id: "2",
    title:"Le lorem ipsum",
    descreption: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
    date:"52 minutes",
    img:"https://www.mycuisine.com/wp-content/uploads/2018/12/burger-rossini-1048x590.jpg",
    flagicon:"https://skyfood.tn/photo1/rychle-obcerstvenie-haccp.png"
  },
  {
    id: "3",
    title:"Le lorem ipsum",
    descreption: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
    date:"52 minutes",
    img:"https://www.mycuisine.com/wp-content/uploads/2018/12/burger-rossini-1048x590.jpg",
    flagicon:"https://skyfood.tn/photo1/rychle-obcerstvenie-haccp.png"
  },
  
];
const Notification = () => {
  const renderItem = ({ item }: {item: Props}) => {
    return (
      <NotificationItem {...item} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themColor.white,
    paddingTop: headerHeight
  }
});
