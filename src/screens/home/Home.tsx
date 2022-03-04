import React, {useCallback, useRef} from 'react';
import { StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../components/bottomSheet/BottomSheet';
import GridCategories from '../../components/gridCategories/GridCategories';
import Header from '../../components/header/Header';
import ListItems from '../../components/listItems/ListItems';
import BlackFilterBackground from '../../components/UI/blackFilterBackground/BlackFilterBackground';
import TabNavigator from '../../navigators/componenets/tabNavigations/TabNavigator';
import themColor from '../../utils/colors/themColor';
import {width} from '../../utils/constants/Constants';
const Home = () => {
  const bottomSheet = useRef<BottomSheetRefProps>(null);
  const translateSheetBottomY = useSharedValue(0);
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
      <ListItems sheetPress={onPress} />
      <BlackFilterBackground
        translateY={translateSheetBottomY}
        hidePress={hidePress}
      />
      <BottomSheet ref={bottomSheet} translateY={translateSheetBottomY}>
        <GridCategories/>
      </BottomSheet>
      <TabNavigator/>
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
