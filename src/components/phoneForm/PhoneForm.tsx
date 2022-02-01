import React from 'react';
import { 
  View,
  StyleSheet, 
  Dimensions} from 'react-native';
  import Colors from '../../utils/colors/themColor';
import OrbaButton from '../UI/orbaButton/OrbaButton';
import OrbaPhone from '../UI/orbaInput/OrbaPhone';
import OrbaText from '../UI/orbaText/OrbaText';

const {width, height} = Dimensions.get('window');
const PhoneForm = () => {
  return (
      <View style={styles.container}>
        <OrbaText style={styles.formTitle}>
          الرجاء ادخال رقم الهاتف 
        </OrbaText>
        <OrbaPhone/>
        <OrbaButton  color='red'/>
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
