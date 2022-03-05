import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import themColor from '../../../utils/colors/themColor';
import Ripple from '../../../components/UI/Ripple/Ripple';

const TabItem = ({name}: {name: string}) => {
  return (
    <View style={styles.container}>
      <Ripple
        onTap={() => {
          console.log('tap');
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
    backgroundColor: themColor.ligthWhite,
    justifyContent: 'center',
    alignItems: 'center'
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