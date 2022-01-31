import React from 'react';
import { 
  View,
  StyleSheet,
  ImageBackground,
  Image, 
  ScrollView,
  Dimensions} from 'react-native';

import PhoneForm from '../../components/phoneForm/PhoneForm';
import OrbaText from '../../components/UI/orbaText/OrbaText';


import Colors from '../../utils/colors/themColor';

const {width, height} = Dimensions.get('window');

const InitContainer = ({children} :{ children : JSX.Element }): JSX.Element => {
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
          </ImageBackground>
        </View>
        <Image source={require('../../res/logos/orbaLogo.png')} style={styles.logo}/>
        <View style={styles.subContainer}>
          <PhoneForm/>
        </View>
        <OrbaText style={styles.version}>
            الاصدار :1.0.0 
        </OrbaText>
      </View>
    </ScrollView>
  );
};

export default InitContainer;
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
  subContainer:{ 
    marginTop: logoSize.height/2,
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10
  },
  version: { 
    color: Colors.gray,
    textAlign: 'center',
    fontSize: 14,
  },
  input: { 
    borderColor: "gray",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center'
  }
})