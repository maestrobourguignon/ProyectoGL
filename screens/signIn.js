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
      <TextInput
        style={styles.txtInput}
        placeholder="Enter your full name"
        value={null}
        onChangeText={val => setName(val)}
      />
      <View style={styles.separador} />
      <TextInput
        style={styles.txtInput}
        placeholder="Enter your e-mail"
        keyboardType="email-address"
        value={null}
        onChangeText={val => setEmail(val)}
      />
      <View style={styles.separador} />
      <TextInput
        style={styles.txtInput}
        placeholder="Enter password"
        secureTextEntry
        value={null}
        onChangeText={val => setPassword(val)}
      />
      <View style={styles.separador} />
      <TextInput
        style={styles.txtInput}
        placeholder="Confirm password"
        secureTextEntry
        value={null}
        onChangeText={val => setConfirm(val)}
      />
      <View style={styles.separador40} />
      <Boton
        title={'Register'}
        onPress={() => {
          navigation.navigate('GetStarted');
        }}
      />
      <View style={styles.separador} />
      <View style={styles.row}>
        <Text style={styles.txt}>Already have an account ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogIn');
          }}>
          <Text style={[styles.txt, styles.pressableTxt]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
