import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';

export default ({navigation}) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Elipse />
      <Text style={styles.title}>Welcome Back!</Text>
      <Image
        source={require('../components/images/login.png')}
        style={styles.img}
      />
      <View style={styles.separador} />
      <TextInput
        style={styles.txtInput}
        keyboardType={'email-address'}
        value={null}
        onChangeText={val => setEmail(val)}
        placeholder={'Enter your e-mail'}
      />
      <View style={styles.separador} />
      <TextInput
        style={styles.txtInput}
        secureTextEntry
        value={null}
        onChangeText={val => setPassword(val)}
        placeholder={'Enter your password'}
      />
      <View style={styles.separador} />
      <View style={styles.margin60}>
        <TouchableOpacity>
          <Text style={[styles.txt, styles.bold, styles.pressableTxt]}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <Boton
        title={'Log In'}
        onPress={() => {
          navigation.navigate('GetStarted');
        }}
      />
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
