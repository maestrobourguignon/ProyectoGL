import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export default ({type, ph, onChangeText}) => {
  return (
    <TextInput
      style={styles.txtInput}
      keyboardType={type === 'email' ? 'email-address' : null}
      secureTextEntry={type === 'password' ? true : null}
      value={null}
      onChangeText={val => onChangeText(val)}
      placeholder={ph}
      placeholderTextColor="#aaa"
    />
  );
};
