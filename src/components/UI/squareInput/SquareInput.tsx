import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import themColor from '../../../utils/colors/themColor';
//FIXME 
// add a type to ref props  
const SquareInput = ({setInput, onChange}:{setInput: React.Dispatch<React.SetStateAction<string>>},ref :any) => {
  return (
    <TextInput 
      style={styles.square} 
      keyboardType='numeric' 
      maxLength={1}
      ref={ref}
      onChangeText={(text)=>{
        if (text !== ''){
          onChange();
        }
      }}
      />
  );
};

const forWordSquareInput = forwardRef(SquareInput)

export default forWordSquareInput;

const styles = StyleSheet.create({
    square: {
        flex : 1,
        backgroundColor: themColor.white,
        borderRadius: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 35,
        color: themColor.darkGray,
        borderWidth: 4,
        borderColor: themColor.lightGray
    }
});
