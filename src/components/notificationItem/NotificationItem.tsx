import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from 'react-native-reanimated';
import themColor from '../../utils/colors/themColor';
export interface Props {
  id: string;
  title: string;
  descreption: string;
  date: string;
  img: string;
  flagicon: string;
}
const NotificationItem: React.FC<Props> = ({
  id,
  title,
  descreption,
  date,
  img,
  flagicon,
}) => (
  <TouchableOpacity style={[styles.item]}>
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={[styles.descreptin]}>{descreption}</Text>
      <Text style={[styles.date]}>il y a {date}</Text>
    </View>
    <View style={[styles.containerImage]}>
      <Image
        style={[styles.image_notification]}
        source={{
          uri: img,
        }}
      />
      <Image
        style={[styles.flag_icon_notification]}
        source={{
          uri: flagicon,
        }}
      />
    </View>
  </TouchableOpacity>
);
export default NotificationItem;
const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  containerImage: {
    flex: 1.7,
    aspectRatio: 1,
  },
  item: {
    flexDirection: 'row-reverse',
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: themColor.ligthWhite
  },
  title: {
    fontSize: 13,
    marginLeft: 7,
    color: '#686a6e',
    fontWeight: 'bold',
  },
  descreptin: {
    fontSize: 12.5,
    marginLeft: 7,
    color: themColor.darkGray,
  },
  date: {
    fontSize: 10,
    marginLeft: 7,
    color: '#7e8691',
  },
  image_notification: {
    flex: 1,
    borderRadius: 50,
  },
  flag_icon_notification: {
    height: 35,
    width: 35,
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: [{translateY: 7}],
  },
});
