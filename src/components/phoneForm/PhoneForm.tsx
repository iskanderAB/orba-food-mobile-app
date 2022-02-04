import React from 'react';
import { 
  View,
  StyleSheet, 
  Dimensions} from 'react-native';
  import Colors from '../../utils/colors/themColor';
import OrbaSentButton from '../UI/orbaSentButton/OrbaSentButton';
import OrbaPhone from '../UI/orbaPhone/OrbaPhone';
import OrbaText from '../UI/orbaText/OrbaText';

const {width, height} = Dimensions.get('window');
const PhoneForm = () => {
  return (
      <View style={styles.container}>
        <OrbaText style={styles.formTitle}>
          الرجاء ادخال رقم الهاتف 
        </OrbaText>
        <OrbaPhone/>
        <OrbaSentButton  icon={'send'} title={'ارسل'} mode='light' />
      </View>
  );
};

export default PhoneForm;

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
