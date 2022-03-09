import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import SliderHome from '../sliderHome/SliderHome';
import HeaderHome from '../../containers/headerHome/HeaderHome';
import {itemSize, tabBarHeight} from '../../utils/constants/Constants';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import FullWidthItem from '../fullWidthItem/FullWidthItem';
import HalfWidthItem from '../halfWidthItem/HalfWidthItem';

const data = [
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title:
      'Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'Neapolitan Pizza Traditional Toppings',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: false,
  },
  {
    imageUrl: '../res/images/foodImages/burger.png',
    title: 'New York-Style Pizza Traditional Toppings:',
    price: [8.5, 16.5],
    deliveryTimeEstimation: [40, 30],
    liked: true,
  },
];

interface Props {
  sheetPress: () => void;
  velocity: SharedValue<number | undefined>;
  scrollY: SharedValue<number | undefined>;
}

const ListItems: React.FC<Props> = ({sheetPress, velocity, scrollY}) => {
  const [menu, setMenu] = useState('half');

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      velocity.value = event.velocity?.y;
      scrollY.value = event.contentOffset.y;
      // console.log('test mohammed ', event);
      // console.log("scrolle home ", velocity.value?.toFixed(1));
    },
    onEndDrag: event => {
      // console.log(event);
    },
    onBeginDrag: event => {},
    onMomentumBegin: event => {},
  });

  const renderFullWidthItem = useCallback(
    ({item, index}: {index: number; item: any}) => (
      <FullWidthItem {...item} index={index} />
    ),[])

  const renderHalfWidthItem = useCallback(
    ({item, index}: {index: number; item: any}) => (
      <HalfWidthItem {...item} index={index} />
    ),
    []);
  const getItemLayout = useCallback(
    (_, index: number) => ({
      length: itemSize.height,
      offset: itemSize.height * index,
      index,
    }),
    [],
  );
  return (
    <>
      {menu === 'half' ? (
        <Animated.FlatList
          key="half"
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          scrollEventThrottle={60}
          pinchGestureEnabled
          numColumns={2}
          data={data}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <HeaderHome sheetPress={sheetPress} setMenu={setMenu} />
          }
          ListFooterComponent={
            <View
              style={{
                marginBottom: tabBarHeight,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text> loading ... </Text>
            </View>
          }
          renderItem={renderHalfWidthItem}
          // updateCellsBatchingPeriod={60} //Fixme
          // removeClippedSubviews={false} //Fixme
          bounces={false}
          // maxToRenderPerBatch={15}
          ListEmptyComponent={<Text> list is empty </Text>}
          initialNumToRender={20}
          getItemLayout={getItemLayout}
          keyExtractor={(item, index) => `half-${index}`}
          onEndReached={() => console.log(' kammalt ')}
        />
      ) : (
        <Animated.FlatList
          key={"full"}
          scrollEventThrottle={60}
          pinchGestureEnabled
          numColumns={1}
          data={data}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <HeaderHome sheetPress={sheetPress} setMenu={setMenu} />
          }
          ListFooterComponent={
            <View
              style={{
                marginBottom: tabBarHeight,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text> loading ... </Text>
            </View>
          }
          renderItem={renderFullWidthItem}
          // updateCellsBatchingPeriod={60} //Fixme
          // removeClippedSubviews={false} //Fixme
          bounces={false}
          // maxToRenderPerBatch={15}
          ListEmptyComponent={<Text> list is empty </Text>}
          initialNumToRender={20}
          getItemLayout={getItemLayout}
          keyExtractor={(item, index) => `full-${index}`}
          onEndReached={() => console.log(' kammalt ')}
        />
      )}
    </>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
