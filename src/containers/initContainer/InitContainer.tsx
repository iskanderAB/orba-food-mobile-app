import React from 'react';
import { 
  View,
  StyleSheet} from 'react-native';

import PhoneForm from '../../components/phoneForm/PhoneForm';

const InitContainer = ({children} :{ children : JSX.Element }): JSX.Element => {
  return (
    <View style={styles.container}>
      <PhoneForm/>
    </View>
  );
};

export default InitContainer;

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