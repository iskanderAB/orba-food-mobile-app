import React, {useCallback, useRef} from 'react';
import { Button, StyleSheet, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../components/bottomSheet/BottomSheet';
import GridCategories from '../../components/gridCategories/GridCategories';
import Header from '../../components/header/Header';
import ListItems from '../../components/listItems/ListItems';
import BlackFilterBackground from '../../components/UI/blackFilterBackground/BlackFilterBackground';
import themColor from '../../utils/colors/themColor';
import {width} from '../../utils/constants/Constants';

interface Props{
  velocity: SharedValue<number>,
  scrollY: SharedValue<number>,
  translateSheetBottomY: SharedValue<number>,
}

const Home: React.FC<Props> = ({ velocity, scrollY, translateSheetBottomY }) => {
  const bottomSheet = useRef<BottomSheetRefProps>(null);


  const onPress = () => {
    if (bottomSheet?.current?.isActive()) bottomSheet?.current?.scrollTo(-200);
    else bottomSheet?.current?.scrollTo(0);
  };
  const hidePress = useCallback(() => {
    bottomSheet?.current?.scrollTo(0);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Header/>
      <ListItems sheetPress={onPress} velocity={velocity} scrollY={scrollY} />
      <BlackFilterBackground
        translateY={translateSheetBottomY}
        hidePress={hidePress}
      />
      <BottomSheet ref={bottomSheet} translateY={translateSheetBottomY}>
        <GridCategories/>
      </BottomSheet>
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
