import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import {logIn, tokenLogIn} from '../services/api';
import Form from '../components/Form';
import t from '../services/translate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

export default ({navigation}) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      return;
    } else {
      tokenLogIn({
        navigation: navigation,
        tokenStorage: token,
      });
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleLogIn = () => {
    logIn({
      Email,
      Password,
      navigation,
    });
    showMessage({
      message: 'Loged In successfuly',
      type: 'success',
      icon: 'auto',
      statusBarHeight: 40,
    });
  };

  return (
    <View style={styles.container}>
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
            navigation.navigate('SignIn');
          }}>
          <Text style={[styles.txt, styles.pressableTxt]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
