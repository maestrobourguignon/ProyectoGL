import React, {useState} from 'react';
import {Image, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import Form from '../components/Form';
import t from '../services/translate';
import {apiLogIn} from '../services/api';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Elipse />
      <View style={[styles.container, styles.width100]}>
        <Form ph={t('createTask.taskPlaceHolder')} />
        <View style={styles.separador} />
        <Switch />
        <Text style={styles.txt}>Completed</Text>
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Create Task'} />
        <Boton title={'Return'} />
      </View>
    </View>
  );
};
