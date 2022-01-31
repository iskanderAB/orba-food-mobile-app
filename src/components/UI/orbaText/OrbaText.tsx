import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrbaText = ({children , style}: {children: string, style: object}) => {
  return (
      <Text style={{...styles.text,...style,}}>
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
