import { transform } from '@babel/core';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import themColor from '../../../utils/colors/themColor';


const { width } = Dimensions.get("window");
interface OrbaDatePickerProps{ 
    date : Date,
    setDate: (date:Date)=>void
}

const OrbaDatePicker: React.FC<OrbaDatePickerProps> = ({date, setDate}) => {
    const [open, setOpen] = useState(false);
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={.85}
            onPress={()=>{
                console.log("hello");
                setOpen(true)
            }}
            >
        <>
        <Icon name={"calendar"} 
            size={20} 
            color={themColor.gray} 
        />
        <Text 
            style={styles.date}
        > 
            {+date=== +(new Date(0)) ? "تاريخ الميلاد" 
            : date.getDate() +"/"+ date.getMonth() +"/"+ date.getFullYear()}  
        </Text>
        <DatePicker
            modal
            open={open}
            mode="date"
            locale='fr-ca'
            androidVariant={"iosClone"}
            title="تاريخ الميلاد "
            confirmText="تأكيد"
            cancelText='إلغاء'
            date={new Date()}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date);
                console.log("date => " , date)
            }}
            onCancel={() => {
                setOpen(false)
            }}
            textColor={themColor.orngeGold}
        />
        </>  
        </TouchableOpacity>
    )
}

export default OrbaDatePicker

const styles = StyleSheet.create({
    container: {
        width: width*.80,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: themColor.white,
        marginTop: 10,
        height:50,
        minHeight: 50,
        flexDirection: 'row-reverse',
        // justifyContent: 'space-between',
    },
    date: {
        // marginLeft: '50%',
        // transform: [{translateX:-30}]
        marginRight: 10,
        paddingRight: 25,
    }    
})