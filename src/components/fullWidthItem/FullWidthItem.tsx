import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import themColor from '../../utils/colors/themColor';
import Heart from '../UI/heart/Heart';
import {itemSize} from '../../utils/constants/Constants';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Ripple from '../UI/Ripple/Ripple';

interface ItemProps {
  imageUrl: string;
  title: string;
  price: number[];
  deliveryTimeEstimation: number[];
  liked: boolean;
  index: number
}

const FullWidthItem: React.FC<ItemProps> = React.memo(({
  imageUrl,
  title,
  price,
  deliveryTimeEstimation,
  liked,
  index
}) => {
  const scale = useSharedValue(0);
  // const counrRender= useRef(0);
  // console.log("form Item ",index," => ",  counrRender.current++);
  const singleTap = Gesture.Tap().onStart(() => {
    console.log('Single tap!');
  });
  const doubleClickHandler = useCallback(() => {
    'worklet';
    cancelAnimation(scale);
    scale.value = withSequence(withSpring(1,{damping: 7}),withTiming(0));
  }, []);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      doubleClickHandler();
    });

  const heartAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
        {
          translateY: -itemSize.height * 0.1,
        },
      ],
      opacity: interpolate(scale.value, [0, 1], [0.3, 1], Extrapolate.CLAMP),
    };
  });

  const taps = Gesture.Exclusive(doubleTap, singleTap);

  return (
    <View style={styles.container}>
      {/* <Ripple
        onTap={() => {
          console.log('tap');
        }}> */}
      <GestureDetector gesture={Gesture.Exclusive(taps)}>
        <View style={styles.imageContainer}>
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <ImageBackground
              source={require('../../res/images/foodImages/burger.png')}
              style={styles.imageBackground}>
              <View style={styles.itemBar}>
                <View style={styles.starContainer}>
                  <Icon name="star" style={styles.star} />
                  <Text style={styles.rating}> 4.5 </Text>
                </View>
                <View>
                  <Heart liked={liked} />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </GestureDetector>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={styles.priceTimeContainer}>
          <Text style={styles.price}>
            {price[0]} DT - {price[1]} DT
          </Text>
          <Text style={styles.time}>
            {deliveryTimeEstimation[0]} - {deliveryTimeEstimation[1]}{' '}
            <Icon size={13} name="clock-o" />
          </Text>
        </View>
      </View>
      <Animated.Image
        source={require('../../res/images/heart.png')}
        style={[styles.heart, heartAnimation]}
      />
      {/* </Ripple>  */}
    </View>
  );
});

export default FullWidthItem;

const styles = StyleSheet.create({
  container: {
    height: itemSize.height,
    width: itemSize.width,
    borderRadius: 10,
    backgroundColor: themColor.ligthWhite,
    marginVertical: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(81, 77, 77,.02)',
    elevation: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    backgroundColor: 'green',
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  itemBar: {
    width: itemSize.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: itemSize.width * 0.05,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hart: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  star: {
    color: '#fff01a',
    fontSize: 16,
  },
  rating: {
    fontSize: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 14,
    maxWidth: itemSize.width * 0.8,
    color: themColor.black,
  },
  priceTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: itemSize.width * 0.05,
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    color: themColor.darkGray,
  },
  time: {
    fontSize: 12,
    color: themColor.darkGray,
  },
  heart: {
    position: 'absolute',
    width: '30%',
    height: '40%',
    resizeMode: 'contain',
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    overflow: 'visible',
    alignSelf: 'center',
  },
});
