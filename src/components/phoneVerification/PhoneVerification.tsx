import React, { useEffect, useRef, useState } from 'react';
import { 
  View,
  StyleSheet, 
  Dimensions,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';

import Fonts from '../../res/fonts/Fonts';
import themColor from '../../utils/colors/themColor';
import Colors from '../../utils/colors/themColor';
import Timer from '../timer/Timer';
import OrbaSentButton from '../UI/orbaSentButton/OrbaSentButton';
import OrbaText from '../UI/orbaText/OrbaText';
import SquareInput from '../UI/squareInput/SquareInput';

const {width, height} = Dimensions.get('window');


const PhoneVerification = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);

  useEffect(()=>{
        // setTimeout(()=> input1Ref.current.focus() , 50)
  },[])

  const onChange = (forwordTo :any):void =>{
      forwordTo.current.focus();
  }
  return (
      <View style={styles.container}>
        <OrbaText style={styles.formTitle}>
            قمنا بارسال رسالة نصية اليك 
        </OrbaText>
        <Text style={styles.subText}>
            الرجاء ادخال الرمز المجود في الرسالة
        </Text>
        <KeyboardAvoidingView 
            style={styles.verficationsInputs}
            enabled

        >
            <SquareInput  ref={input1Ref} onChange={()=>onChange(input2Ref)} />
            <SquareInput  ref={input2Ref} onChange={()=>onChange(input3Ref)} />
            <SquareInput  ref={input3Ref} onChange={()=>onChange(input4Ref)} />
            <SquareInput  ref={input4Ref} onChange={()=>Keyboard.dismiss()} />
        </KeyboardAvoidingView>
        <OrbaSentButton icon={'send'} title={'ارسل'} mode='light' />
        <Timer/>
      </View>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({
  container: { 
    // if u need some styling 
    width: '100%',
    alignItems: 'center',
  },
  formTitle: { 
    color: Colors.darkGray,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: Fonts.regular
  },
  subText: {
    color: Colors.darkGray,
    fontSize: 13.5,
    textAlign: 'center',
    fontFamily: Fonts.regular,
    marginBottom: 20,
  },
  verficationsInputs: { 
      flexDirection: 'row',
      height: 70,
      width: '80%',
      marginBottom: 20
  },
 
})
