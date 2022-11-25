import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import {logIn, tokenLogIn} from '../services/api';
import Form from '../components/Form';
import t from '../services/translate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';

export default ({navigation}) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  // const getToken = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   if (!token) {
  //     return;
  //   } else {
  //     tokenLogIn({
  //       navigation: navigation,
  //       tokenStorage: token,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  const handleLogIn = async () => {
    logIn({
      Email,
      Password,
      navigation,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={-300}>
      <Elipse />
      <Text style={styles.title}>Welcome Back!</Text>
      <Image
        source={require('../components/images/login.png')}
        style={styles.img}
      />
      <View style={styles.separador} />
      <Form type={'email'} ph={t('login.inputEmail')} onChangeText={setEmail} />
      <View style={styles.separador} />
      <Form
        type={'password'}
        ph={t('login.inputPassword')}
        onChangeText={setPassword}
      />
      <View style={styles.separador} />
      <View style={styles.margin60}>
        <TouchableOpacity>
          <Text style={[styles.txt, styles.bold, styles.pressableTxt]}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <Boton title={'Log In'} onPress={handleLogIn} />
      <View style={styles.separador} />
      <View style={styles.row}>
        <Text style={styles.txt}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('SignIn');
          }}>
          <Text style={[styles.txt, styles.pressableTxt]}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </KeyboardAvoidingView>
  );
};
