import React from 'react';
import { 
  View,
  StyleSheet} from 'react-native';
import EmailForm from '../../components/emailForm/EmailForm';
import LoginForm from '../../components/loginForm/LoginForm';

import PhoneForm from '../../components/phoneForm/PhoneForm';
import PhoneVerification from '../../components/phoneVerification/PhoneVerification';

const signUpContainer = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <PhoneVerification/>
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