import React, {useEffect, useState} from 'react';
import Routes from './screens/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tokenLogIn} from './services/api';
import { Menu } from './components/DrawerMenu';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Routes.LandingScreen} />
        <Stack.Screen name="LogIn" component={Routes.LogInScreen} />
        <Stack.Screen name="SignIn" component={Routes.SignInScreen} />
        <Stack.Screen name="Tasks" component={ProfileDrawer} />
        <Stack.Screen name="NewTask" component={Routes.NewTaskScreen} />
        <Stack.Screen name="EditTask" component={Routes.EditTaskScreen} />
        <Stack.Screen name="SetImage" component={Routes.SetImageScreen} />
        <Stack.Screen name="Profile" component={Routes.ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function ProfileDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <Menu {...props} />}>
      <Drawer.Screen name="Tasks2" component={Routes.TasksScreen} />
    </Drawer.Navigator>
  );
}

export default App;
