import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';

import RNBootSplash from "react-native-bootsplash";
import themColor from './src/utils/colors/themColor';
import MainNavigator from './src/navigators/mainNavigator/MainNavigator';
import store from './src/_redux/app/store';
import TabNavigator from './src/navigators/componenets/tabNavigations/TabNavigator';

const App = () => {
  useEffect(()=>{ 
    const init = async () => {
      console.log(" init app ")
    };
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  },[])

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <MainNavigator/>
      </SafeAreaView>
    </Provider>
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
