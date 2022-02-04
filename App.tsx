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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNBootSplash from "react-native-bootsplash";
import SignUp from './src/screens/signUp/SignUp';
import Register from './src/screens/register/Register';
import themColor from './src/utils/colors/themColor';


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
      <Register/>
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
