import React, { useEffect } from 'react';
import { 
  View,
  StyleSheet} from 'react-native';
import EmailForm from '../../components/emailForm/EmailForm';
import LoginForm from '../../components/loginForm/LoginForm';
import PhoneForm from '../../components/phoneForm/PhoneForm';
import PhoneVerification from '../../components/phoneVerification/PhoneVerification';
import { formType } from '../../types/types';

const signUpContainer = ({formName}:{formName: formType}): JSX.Element => {
  return (
    <View style={styles.container}>
      {
        formName === 'phoneForm'
        ?(<PhoneForm/>)
        :formName === 'phoneVerfication'
        ?(<PhoneVerification/>)
        :formName === 'loginForm'
        ?(<LoginForm/>)
        :formName === 'emailForm'
        ? (<EmailForm/>)
        : null
      }
     
    </View>
  );
};

export default signUpContainer;

const logoSize = {
  width: 145,
  height: 150 
}
const styles = StyleSheet.create({
  container:{ 
    marginTop: logoSize.height/2,
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
})