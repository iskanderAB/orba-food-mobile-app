import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import themColor from '../../utils/colors/themColor';
import OrbaText from '../UI/orbaText/OrbaText';

const Terms = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [ellips,setEllips] = useState(true);

    const onPress=()=>{
       setEllips(!ellips);
    }
    return (
    <View style={styles.container}>
        <TouchableWithoutFeedback 
            onPress={onPress}
        >
        <View>
            <OrbaText style={ styles.terms } ellips={ellips}> 
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
                يجب عليك الموافقة على قوعد الاستخدام
            </OrbaText>
            </View>
        </TouchableWithoutFeedback>
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />

    </View>
    );
};

export default Terms;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding : 3,
        width: '70%',
        maxWidth: '70%'
    },
    terms: {
        color: themColor.lightGray,
        fontSize: 10,
        flexWrap: 'wrap'
    }
});
