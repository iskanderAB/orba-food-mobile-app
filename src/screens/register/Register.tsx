import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import themColor from '../../utils/colors/themColor';
import RegisterForm from '../../components/registerForm/RegisterForm';
import Version from '../../components/version/Version';

const {width, height} = Dimensions.get('window');
const Register = () => {
  return (
       <View style={styles.container}>
        <Image source={require('../../res/logos/orbaLogo.png')} style={styles.logo}/>
        <RegisterForm/>
        <Version/>
       </View>
  );
};

export default Register;
const logoSize = {
    width: '40%' ,
    height : '20%'
  }
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
        backgroundColor: themColor.green,
    },
    logo: {
        width : logoSize.width,
        height: logoSize.height,
        resizeMode: 'contain',
        marginTop: '5%'
    },
});
