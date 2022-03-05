import React, {useCallback, useRef} from 'react';
import { StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {cancelAnimation, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../components/bottomSheet/BottomSheet';
import GridCategories from '../../components/gridCategories/GridCategories';
import Header from '../../components/header/Header';
import ListItems from '../../components/listItems/ListItems';
import BlackFilterBackground from '../../components/UI/blackFilterBackground/BlackFilterBackground';
import TabNavigator from '../../navigators/componenets/tabNavigations/TabNavigator';
import themColor from '../../utils/colors/themColor';
import {tabBarHeight, width} from '../../utils/constants/Constants';
const Home = () => {
  const bottomSheet = useRef<BottomSheetRefProps>(null);
  const translateSheetBottomY = useSharedValue(0);
  const velocity = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const x = 0;

  // const hideShowTabBar = useDerivedValue(()=>{
  //   console.log("called :'( ")
  //   if (+velocity.value.toFixed(1) < 0.1  ){
  //     return translateSheetBottomY.value = withSpring(0) 
  //   }
  //   return translateSheetBottomY.value =  withTiming(tabBarHeight);
  // }) 

  const tabBarAnimation = useAnimatedStyle(()=>{
    console.log("called :'( ")
    return{
      transform: [
        {translateY: +velocity.value.toFixed(1) <= 0 || scrollY.value < 2 ? withTiming(0) : withTiming(tabBarHeight) }
      ]
    }
  },[])

  const onPress = () => {
    if (bottomSheet?.current?.isActive()) bottomSheet?.current?.scrollTo(-200);
    else bottomSheet?.current?.scrollTo(0);
  };
  const hidePress = useCallback(() => {
    bottomSheet?.current?.scrollTo(0);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Header />
      <ListItems sheetPress={onPress} velocity={velocity} scrollY={scrollY} />
      <BlackFilterBackground
        translateY={translateSheetBottomY}
        hidePress={hidePress}
      />
      <BottomSheet ref={bottomSheet} translateY={translateSheetBottomY}>
        <GridCategories/>
      </BottomSheet>
      <TabNavigator tabBarAnimation={tabBarAnimation}/>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themColor.ligthWhite,
    alignItems: 'center',
    width: width,
    flex: 1,
  },
});
