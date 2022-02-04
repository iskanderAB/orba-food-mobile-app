import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useState } from 'react';
import themColor from '../../utils/colors/themColor';
import Fonts from '../../res/fonts/Fonts';

const {width, height} = Dimensions.get('window');

const Timer = () => {
    const [seconds, setSeconds] = useState(0); 

    useEffect(()=>{
        if(seconds <60){
         var interval = setTimeout(() => {
                setSeconds(seconds => seconds + 1);
          }, 1000);
        }
        return () => clearTimeout(interval);
    },[seconds])

    return (
    <View style={styles.container}>
        <View style={styles.timeContainer}>
            <Icon name="timer" style={styles.timertIcon} />
            <Text style={styles.time}> 
                {
                    seconds < 60 ? `0:${seconds}`: '1:00'
                }
            </Text>
        </View>
        <Text style={[styles.text,{color: seconds<60 ? themColor.darkGray : themColor.orngeGold}]} > اعادة الارسال  </Text>
    </View>
    );
};

export default Timer;

const styles = StyleSheet.create({
    container: { 
        width: width*.85,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeContainer: { 
        flexDirection: 'row'
    },
    timertIcon: { 
        fontSize: 20,
        alignSelf: 'flex-start',
        color : themColor.darkGray,
    },
    time: {
        color: themColor.orngeGold
    },
    text: { 
        textAlign: 'center',
        fontFamily : Fonts.regular
    }
});
