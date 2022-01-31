import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import themColor from '../../../utils/colors/themColor';
const {width, height} = Dimensions.get('window');
const OrbaInput = () => {
  return (
    <View>
      <TextInput style={styles.input}/>
    </View>
  );
};

export default OrbaInput;

const styles = StyleSheet.create({
    input: {
        width: width*.85,
        borderWidth: 1,
        borderColor: themColor.gray,
        borderRadius: 10,
    }
});
