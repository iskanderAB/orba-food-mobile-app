import React from 'react';
import { 
  View,
  StyleSheet,
  ImageBackground,
  Image, 
  ScrollView,
  Dimensions,
  Text} from 'react-native';
import EmailForm from '../../components/emailForm/EmailForm';

import PhoneForm from '../../components/phoneForm/PhoneForm';
import OrbaText from '../../components/UI/orbaText/OrbaText';
import Version from '../../components/version/Version';

import SignUpContainer from '../../containers/signUpContainer/signUpContainer';
import themColor from '../../utils/colors/themColor';


import Colors from '../../utils/colors/themColor';

const {width, height} = Dimensions.get('window');

const SignUp = (): JSX.Element => {
  return (
    <ScrollView style={{backgroundColor: Colors.green}}>
      <View style={styles.container}>
        <View style={styles.slider}>
          <ImageBackground 
            source={require('../../res/images/foods.png')} 
            resizeMode="cover"
            style={styles.imageBackround}
          >
            <View style={styles.greenFilterContainer}/>
            <OrbaText style={styles.register}> تسجيل الدخول </OrbaText>
          </ImageBackground>
        </View>
        <Image source={require('../../res/logos/orbaLogo.png')} style={styles.logo}/>
        <SignUpContainer/>
        <Version/>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const logoSize = {
  width: 145,
  height: 150 
}
const styles = StyleSheet.create({
  container: { 
    height: height-30,
    fontFamily: "Almarai"
  },
  slider: { 
    width : '100%',
    height: '40%',
    backgroundColor: 'red'
  },
  imageBackround: {
    flex: 1
  },
  greenFilterContainer : { 
    flex: 1 ,
    backgroundColor: Colors.green,
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  logo: {
    height: logoSize.height,
    width: logoSize.width,
    transform: [{translateY: logoSize.height*1.25}],
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 2,
  },
  register: {
    position: 'absolute',
    color: themColor.lightGray,
    alignSelf: 'flex-end',
    fontSize: 18,
    marginTop: 10,
    right: 10
  }
})