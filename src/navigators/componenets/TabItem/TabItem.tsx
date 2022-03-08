import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import themColor from '../../../utils/colors/themColor';
import Ripple from '../../../components/UI/Ripple/Ripple';
import { useNavigation } from '@react-navigation/native';


interface Props {
  name: string,
  screen : string
}
const TabItem: React.FC<Props> = ({name,screen}) => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Ripple
        onTap={() => {
          navigation.navigate(screen);
        }}>
        <Icon name={name} style={styles.icon} />
      </Ripple>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themColor.gray,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  icon: {
    color: themColor.darkGray,
    fontSize: 26,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});