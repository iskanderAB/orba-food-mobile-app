import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../screens/signUp/SignUp';
import Register from '../../screens/register/Register';
import Home from '../../screens/home/Home';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
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
              animationTypeForReplace: 'push',
              }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="home-screen"
            component={Home}
            options={{
              gestureEnabled: true,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push',
              }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
