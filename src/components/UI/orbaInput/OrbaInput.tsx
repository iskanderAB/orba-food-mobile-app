import React from 'react';
import { 
  Dimensions, 
  KeyboardAvoidingView, 
  StyleSheet, 
  TextInput } from 'react-native';
import themColor from '../../../utils/colors/themColor';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
type Mode = "dark"|"light"|"transparent";
type Lang = "AR"|"FR";

interface Props { 
  icon:string,
  mode:Mode,
  password?:boolean,
  lang?:Lang,
  placeholder?:string
}
const OrbaInput: React.FC<Props> = ({icon,mode, password=false,lang='FR',placeholder=''})=> 
  {
    return (
      <KeyboardAvoidingView 
          style={[styles.inputContainer,{
            backgroundColor : mode === 'light' ?  themColor.white : 'transparent',
            borderWidth: mode === 'light' ? 0 : 1,
            flexDirection: lang ==='FR'? 'row' : 'row-reverse'
          }]} 
          behavior="height"
          keyboardVerticalOffset={100}
          enabled
        >
        <Icon name={icon} size={20} color={themColor.gray} />
        <TextInput 
            style={lang === 'FR' ? styles.inputFR : styles.inputAR}
            selectionColor={themColor.gray}
            letterSpacing={2}
            maxLength={50}
            keyboardAppearance='light'
            placeholder={placeholder === '' ?  password ? ' ************':'exemple.mail.com': placeholder}
            placeholderTextColor={ themColor.gray }
            secureTextEntry={password}
          />
      </KeyboardAvoidingView>
    );
};

export default OrbaInput;

const styles = StyleSheet.create({
  inputContainer: {
        width: width*.90,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: 'white',
        marginTop: 10,
        height:50,
        minHeight: 50,
        borderColor: themColor.darkGray
    },
    inputFR: {
      flex: 1,
      fontSize: 15,
      color: themColor.gray,
      paddingLeft: 25,
    },
    inputAR: {
      flex: 1,
      fontSize: 15,
      color: themColor.gray,
      marginRight: 10,
      paddingRight: 25,
      paddingLeft: 10
    }
});
