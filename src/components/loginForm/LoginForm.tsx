import React from 'react';
import { 
  View,
  StyleSheet, 
  Dimensions} from 'react-native';
import themColor from '../../utils/colors/themColor';
  import Colors from '../../utils/colors/themColor';
import OrbaButton from '../UI/orbaButton/OrbaButton';
import OrbaInput from '../UI/orbaInput/OrbaInput';
import OrbaPhone from '../UI/orbaPhone/OrbaPhone';
import OrbaSentButton from '../UI/orbaSentButton/OrbaSentButton';

import OrbaText from '../UI/orbaText/OrbaText';

const {width, height} = Dimensions.get('window');
const LoginForm = () => {
  return (
      <View style={styles.container}>
        <OrbaText style={styles.formTitle}>
          تسجيل الدخول
        </OrbaText>
        <OrbaInput icon='envelope' mode='light' />
        <OrbaInput icon='lock' password mode='light' />
        <View style={styles.sigupView}>
          <OrbaText style={styles.forgetPassword} > نسيت كلمة السر </OrbaText>
        </View>
        <OrbaButton/>
        <View style={styles.sigupView}>
          <OrbaText style={styles.signup}> هل انت مستخدم جديد ؟ </OrbaText>
          <OrbaText style={{...styles.signup,color: themColor.orngeGold}}> انشىء حساب </OrbaText>
        </View>
      </View>
  );
};

export default LoginForm;

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
    marginBottom: 10,
  },
  forgetPassword: {
    color: themColor.gray,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  sigupView: { 
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    width: '80%',
  },
  signup: {
    color: themColor.gray,
    fontSize: 12,
 
  }
})
