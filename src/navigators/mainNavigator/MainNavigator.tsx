import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../../screens/signUp/SignUp';
import Register from '../../screens/register/Register';


const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SignUp"
        screenOptions={{
          presentation: 'modal',
          
        }}
      >
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Register" component={Register} 
            options={{
              gestureEnabled: false,
            }}
    
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
