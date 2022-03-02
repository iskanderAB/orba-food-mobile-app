import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
type Mode = "dark"|"light"|"transparent";
interface OrbaTextProps {
  children: string| React.ReactNode ,
  mode?: Mode ,
  style?: StyleProp<TextStyle> ,
  ellips?: boolean
}
const OrbaText: React.FC<OrbaTextProps> = ({children , mode , style,ellips=false}) => {
  return (
      <Text 
        style={[styles.text,style]}
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
