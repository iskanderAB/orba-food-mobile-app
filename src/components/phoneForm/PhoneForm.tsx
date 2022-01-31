import React from 'react';
import { 
  View,
  Text,
  TextInput, 
  StyleSheet, 
  Dimensions} from 'react-native';
  import Colors from '../../utils/colors/themColor';
import OrbaButton from '../UI/orbaButton/OrbaButton';
import OrbaInput from '../UI/orbaInput/OrbaInput';

const {width, height} = Dimensions.get('window');
const PhoneForm = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>
          الرجاء ادخال رقم الهاتف 
        </Text>
        <OrbaInput/>
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
    marginBottom: 20,
    fontFamily: "Almarai"
  }
})
