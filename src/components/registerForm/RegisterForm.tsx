import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import OrbaText from '../UI/orbaText/OrbaText';
import themColor from '../../utils/colors/themColor';
import OrbaInput from '../UI/orbaInput/OrbaInput';
import OrbaButton from '../UI/orbaButton/OrbaButton';
import Terms from '../terms/Terms';
import OrbaDatePicker from '../UI/orbaDatePicker/OrbaDatePicker';
import Picker from '../UI/picker/Picker';

const {height , width } = Dimensions.get("window");

const RegisterForm = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
   <ScrollView style={styles.scrollView}> 
    <View style={styles.container}>
      <OrbaText style={styles.title}> قم بأنشاء حساب </OrbaText>
        <OrbaInput mode='transparent' icon='user' lang='AR' placeholder='الاسم و اللقب'/>
        <OrbaInput mode='transparent' icon='envelope' lang='AR' placeholder='البريد الالكتروني'/>
        <OrbaInput mode='transparent' icon='lock' password lang='AR' placeholder='كلمة السر'/>
        <OrbaInput mode='transparent' icon='lock' password lang='AR' placeholder='اعادة كلموة السر'/>
        <OrbaDatePicker date={date} setDate={setDate}/>
        {/* <OrbaInput mode='transparent' icon='calendar' lang='AR' placeholder='تاريخ الولادة'/> */}
        <Picker/>
        <Terms/>
        <OrbaButton/>
        <View style={styles.newAccountText}>
          <OrbaText style={{...styles.textNewAccount,color: themColor.orngeGold}}>   سجل الدخول  </OrbaText>
          <OrbaText style={styles.textNewAccount}>  هل لديك حساب ؟  </OrbaText>
        </View>
    </View>
  </ScrollView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        flex: 1,
        paddingBottom: 10
    },
    title: { 
        color: themColor.lightGray,
        marginVertical: 5
    },
    newAccountText: { 
      flexDirection :'row',
      color: themColor.darkGray,
      width: '80%',
      justifyContent : 'flex-end'
    },
    textNewAccount: {
      color: themColor.lightGray,
      fontSize: 12
    },
    scrollView: {
      borderTopWidth: .7,
      borderTopColor: 'rgba(139,137,137,0.5)',
    }

});
