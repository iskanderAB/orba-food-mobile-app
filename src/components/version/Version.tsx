import { StyleSheet } from 'react-native';
import React from 'react';
import OrbaText from '../UI/orbaText/OrbaText';
import themColor from '../../utils/colors/themColor';

const Version = () => {
  return (
    <OrbaText style={styles.version}>
        الاصدار :1.0.0 
    </OrbaText>
  );
};

export default Version;

const styles = StyleSheet.create({
    version: { 
        color: themColor.gray,
        textAlign: 'center',
        fontSize: 14,
      },
});
