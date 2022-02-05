/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import RNBootSplash from "react-native-bootsplash";
import themColor from './src/utils/colors/themColor';
import MainNavigator from './src/navigators/mainNavigator/MainNavigator';

const App = () => {
  useEffect(()=>{ 
    const init = async () => {
      console.log("init app ")
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Almarai Regular',
    backgroundColor: themColor.green,
  }
});

export default App;
