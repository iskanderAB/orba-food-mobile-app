import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet,  TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { itemSize } from '../../../utils/constants/Constants';

const Heart = ({liked}:{liked: boolean}) => {
    const buttonRef = useRef<LottieView>(null);

    const onAdd =() => {
        console.log("cliked");
        buttonRef.current?.reset();
        if (liked){
          buttonRef.current?.play(20, 88);
        }
        else{
          buttonRef.current?.play(24, 88);
        }
    };

    useEffect(()=>{
      if (!liked)
        buttonRef.current?.play(20, 20);
      else
        buttonRef.current?.play(88, 88);
    },[])

    return (
        <TouchableOpacity style={styles.hart} onPress={onAdd} >
          <LottieView
              ref={buttonRef}
              source={require('../../../res/animations/like-animation.json')}
              style={{ flex: 1 }}
              autoPlay={false}
              loop={false}
              speed={1}
          />
        </TouchableOpacity>
  )
}

export default Heart

const styles = StyleSheet.create({
  hart: {
    width: itemSize.width*.15,
    aspectRatio: 1,
    marginTop: 0,
    marginRight: -itemSize.width*.05
  }
})