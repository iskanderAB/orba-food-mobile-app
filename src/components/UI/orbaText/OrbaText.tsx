import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
type Mode = "dark"|"light"|"transparent";
const OrbaText = ({children , mode , style,ellips=false}: {children: string, mode?: Mode, style?: object,ellips?:boolean}) => {
  return (
      <Text 
        style={{...styles.text,...style,}}
        numberOfLines={ellips? 2 : undefined}
      >
          {children}
      </Text>
  );
};

export default OrbaText;

const styles = StyleSheet.create({
    text: { 
        fontFamily: 'Almarai Regular',
        fontSize: 20
    }
});
