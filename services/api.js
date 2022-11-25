import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
const api = 'https://api-nodejs-todolist.herokuapp.com';
const apiLogIn = api + '/user/login';
const apiLogOut = api + '/user/logout';
const apiRegister = api + '/user/register';
const apiMe = api + '/user/me';
const apiTask = api + '/task';

export const logIn = ({Email, Password, navigation}) => {
  fetch(apiLogIn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: Email,
      password: Password,
    }),
  })
    .then(response => response.json())
    .then(async data => {
      await AsyncStorage.setItem('token', data.token);
      navigation.replace('GetStarted');
      showMessage({
        message: 'Loged In successfuly',
        type: 'success',
        icon: 'auto',
        statusBarHeight: 40,
      });
    });
};

export const logOut = ({tokenStorage, navigation}) => {
  fetch(apiLogOut, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + tokenStorage,
    },
  }).then(async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace('LogIn');
    showMessage({
      message: 'You have successfully logged out',
      type: 'info',
      icon: 'success',
      statusBarHeight: 40,
    });
  });
};

export const SignIn = ({Name, Email, Password, Confirm, navigation}) => {
  console.log(Name);
  if (!Name || !Email || !Password || !Confirm) {
    showMessage({
      message: 'Please fill in all the fields',
      type: 'warning',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else if (Name && !/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(Name)) {
    showMessage({
      message: 'Name may only contain letters and spaces between them',
      type: 'warning',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else if (Email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
    showMessage({
      message: 'Must enter a valid E-mail adress',
      type: 'warning',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else if (Password && Password.length < 7) {
    showMessage({
      message: 'Password must be at least 7 characters',
      type: 'warning',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else if (Password !== Confirm) {
    showMessage({
      message: 'Password must match',
      type: 'warning',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else {
    fetch(apiRegister, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
      }),
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        console.log('TOKEN OBTTENIDO: ' + data.token);
        await AsyncStorage.setItem('token', data.token);
        showMessage({
          message: 'Acount created successfuly',
          type: 'success',
          icon: 'auto',
          statusBarHeight: 40,
        });
        navigation.replace('GetStarted');
      });
  }
};

export const tokenLogIn = ({navigation, tokenStorage}) => {
  fetch(apiMe, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + tokenStorage,
    },
  }).then(() => {
    navigation.replace('Tasks');
    showMessage({
      message: 'Welcome Back!',
      type: 'success',
      icon: 'auto',
      statusBarHeight: 40,
    });
  });
};

export const getAllTasks = ({tokenStorage, setTasks}) => {
  fetch(apiTask, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + tokenStorage,
    },
  })
    .then(response => response.json())
    .then(async data => {
      console.log(data);
      setTasks(data.data);
    });
};

export const addTask = ({description, completed, tokenStorage}) => {
  if (description.length < 1) {
    showMessage({
      message: 'Cannot create an empty task',
      type: 'danger',
      icon: 'auto',
      statusBarHeight: 40,
    });
  } else {
    fetch(apiTask, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + tokenStorage,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
        completed: completed,
      }),
    }).then(
      showMessage({
        message: 'New task created',
        type: 'success',
        icon: 'auto',
        statusBarHeight: 40,
      }),
    );
  }
};

export const deleteTask = ({id, tokenStorage}) => {
  fetch(apiTask + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + tokenStorage,
      'Content-Type': 'application/json',
    },
  });
};
