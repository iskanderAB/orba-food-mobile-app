import React from 'react';
import { 
  View,
  StyleSheet,
  ImageBackground,
  Image, 
  ScrollView,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Touchable,
  TouchableHighlight,
  TouchableNativeFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import EmailForm from '../../components/emailForm/EmailForm';
import PhoneForm from '../../components/phoneForm/PhoneForm';
import OrbaText from '../../components/UI/orbaText/OrbaText';
import Version from '../../components/version/Version';

import SignUpContainer from '../../containers/signUpContainer/signUpContainer';
import themColor from '../../utils/colors/themColor';


import Colors from '../../utils/colors/themColor';

const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}): JSX.Element => {
  return (
    <ScrollView>
       <LinearGradient colors={[Colors.lightGreen, Colors.darkGreen]} style={styles.container}>
        <View style={styles.slider}>
          <ImageBackground 
            source={require('../../res/images/foods.png')} 
            resizeMode="cover"
            style={styles.imageBackround}
          >
            <View style={styles.greenFilterContainer}/>
            <TouchableNativeFeedback
              onPress={()=> {
                console.log("clicked2")
                 navigation.navigate('Register');
                console.log("clicked2")
              } 
              }
            >
              <View style={styles.register}>
              <OrbaText style={styles.Textregister} > تسجيل الدخول </OrbaText>
              </View>
            </TouchableNativeFeedback>
          </ImageBackground>
        </View>
        <Image source={require('../../res/logos/orbaLogo.png')} style={styles.logo}/>
        <SignUpContainer/>
        <Version/>
      </LinearGradient>
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
    height: height,
    backgroundColor: Colors.green
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
    alignSelf: 'flex-end',
    marginTop: 10,
    right: 10,
    zIndex: 100,
  },
  Textregister: { 
    color: themColor.lightGray,
    fontSize: 18,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})