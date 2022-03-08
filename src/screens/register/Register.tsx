import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import themColor from '../../utils/colors/themColor';
import RegisterForm from '../../components/registerForm/RegisterForm';
import Version from '../../components/version/Version';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const Register = () => {
  return (
        <LinearGradient colors={[themColor.lightGreen, themColor.darkGreen]} style={styles.container}>
          <Image source={require('../../res/logos/orbaLogo.png')} style={styles.logo}/>
          <RegisterForm/>
          <Version/>
        </LinearGradient>  
  );
};
export default Register;
const logoSize = {
    width: '40%',
    height : '20%'
  }
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height,
        backgroundColor: themColor.green,
    },
    logo: {
        width : logoSize.width,
        height: logoSize.height,
        resizeMode: 'contain',
        marginTop: '5%'
    },
});
