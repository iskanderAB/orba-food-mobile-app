import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../screens/signUp/SignUp';
import Register from '../../screens/register/Register';
import Home from '../../screens/home/Home';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import TabNavigator from '../componenets/tabNavigations/TabNavigator';
import { tabBarHeight } from '../../utils/constants/Constants';
import Search from '../../screens/Search/Search';
import Notification from '../../screens/notification/Notification';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const velocity = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const translateSheetBottomY = useSharedValue(0);

  const tabBarAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            (+velocity.value.toFixed(1) <= 0 || scrollY.value < 150 && translateSheetBottomY.value  >= 0) //fix the velocity to create best tab animation 
            ? withTiming(0)
            : withTiming(tabBarHeight),
        },
      ],
    };
  }, []);

  const HomeWithProps = () => <Home 
    velocity={velocity} 
    scrollY={scrollY}
    translateSheetBottomY={translateSheetBottomY}
    />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          gestureEnabled: true,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen
            name="signUp-phoneForm"
            component={SignUp}
            initialParams={{formType: 'phoneForm'}}
          />
          <Stack.Screen
            name="signUp-phoneVerfication"
            component={SignUp}
            initialParams={{formType: 'phoneVerfication'}}
          />
          <Stack.Screen
            name="signUp-loginForm"
            component={SignUp}
            initialParams={{formType: 'loginForm'}}
          />
          <Stack.Screen
            name="signUp-emailForm"
            component={SignUp}
            initialParams={{formType: 'emailForm'}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              gestureEnabled: true,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push'
            }}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="home-screen"
            component={HomeWithProps}
            options={{
              gestureEnabled: true,
              presentation: 'modal',
              animation: 'fade',
              animationTypeForReplace: 'push',
            }}
          />
          <Stack.Screen
            name="search-screen"
            component={Search}
            options={{
              gestureEnabled: true,
              presentation: 'modal',
              animation: 'slide_from_right',
              animationTypeForReplace: 'push',
            }}
          />
          <Stack.Screen
            name="notification-screen"
            component={Notification}
            options={{
              gestureEnabled: true,
              presentation: 'modal',
              animation: 'slide_from_left',
              animationTypeForReplace: 'push',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <TabNavigator tabBarAnimation={tabBarAnimation} />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
