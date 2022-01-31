import React from 'react';
import { 
  Dimensions, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput } from 'react-native';
import themColor from '../../../utils/colors/themColor';
const {width, height} = Dimensions.get('window');
const OrbaInput = () => {
  return (
    <KeyboardAvoidingView 
        style={styles.inputContainer} 
        behavior="height"
        keyboardVerticalOffset={100}
        enabled
      >
      <Text style={styles.textInput}>
        +216  
      </Text> 
      <TextInput 
        style={styles.input}
        selectionColor={themColor.gray}
        letterSpacing={3}
        keyboardAppearance='light'
        keyboardType={'phone-pad'}
        />
    </KeyboardAvoidingView>
  );
};

export default OrbaInput;

const styles = StyleSheet.create({
  inputContainer: {
        width: width*.85,
        borderWidth: 1,
        borderColor: themColor.gray,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    textInput: { 
      color: themColor.gray,
      fontSize: 18
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: themColor.gray,
      marginLeft: 10,
    }
});
