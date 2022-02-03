import React from 'react';
import { 
    View,
    StyleSheet, 
    Dimensions} from 'react-native';
  import Colors from '../../utils/colors/themColor';
import OrbaPhone from '../UI/orbaPhone/OrbaPhone';
import OrbaText from '../UI/orbaText/OrbaText';
import OrbaSentButton from '../UI/orbaSentButton/OrbaSentButton';
import GoogleSignInButton from '../UI/googleSignInButton/GoogleSignInButton';

const {width, height} = Dimensions.get('window');
const EmailForm = () => {
  return (
      <View style={styles.container}>
        <GoogleSignInButton/>
        <OrbaSentButton icon={'envelope'} title={'Addresse email'} mode='transparent'/>
      </View>
  );
};

export default EmailForm;

const styles = StyleSheet.create({
  container: { 
    // if u need some styling 
    width: '100%',
    alignItems: 'center',
  },
  formTitle: { 
    color: Colors.gray,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: "Almarai Light"
  }
})
