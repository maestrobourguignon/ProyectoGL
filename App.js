import React, {useEffect, useState} from 'react';
import Routes from './screens/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tokenLogIn} from './services/api';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Routes.LandingScreen} />
        <Stack.Screen name="LogIn" component={Routes.LogInScreen} />
        <Stack.Screen name="SignIn" component={Routes.SignInScreen} />
        <Stack.Screen name="GetStarted" component={Routes.GetStartedScreen} />
        <Stack.Screen name="NewTask" component={Routes.NewTaskScreen} />
        <Stack.Screen name="Tasks" component={Routes.TasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
