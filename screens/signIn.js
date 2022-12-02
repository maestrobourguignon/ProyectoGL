import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import Form from '../components/Form';
import t from '../services/translate';
import {SignIn} from '../services/api';
import FlashMessage, {showMessage} from 'react-native-flash-message';

export default ({navigation}) => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Confirm, setConfirm] = useState();

  return (
    <View style={styles.container}>
      <Elipse />
      <Text style={styles.title}>Welcome OnBoard!</Text>
      <Text style={styles.txt}>Lets Help you meet up tasks.</Text>
      <View style={styles.separador40} />
      <Form ph={t('register.inputName')} onChangeText={setName} />
      <View style={styles.separador} />
      <Form
        type={'email'}
        ph={t('register.inputEmail')}
        onChangeText={setEmail}
      />
      <View style={styles.separador} />
      <Form
        type={'password'}
        ph={t('register.inputPassword')}
        onChangeText={setPassword}
      />
      <View style={styles.separador} />
      <Form
        type={'password'}
        ph={t('register.inputConfirm')}
        onChangeText={setConfirm}
      />
      <View style={styles.separador40} />
      <Boton
        title={'Register'}
        onPress={() =>
          SignIn({
            Name: Name,
            Email: Email,
            Password: Password,
            Confirm: Confirm,
            navigation: navigation,
          })
        }
      />
      <View style={styles.separador} />
      <View style={styles.row}>
        <Text style={styles.txt}>Already have an account ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('LogIn');
          }}>
          <Text style={[styles.txt, styles.pressableTxt]}>Log In</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  );
};
