import React from 'react';
import Routes from './screens/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={Routes.LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={Routes.SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={Routes.GetStartedScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
