import React, {useState} from 'react';
import {Image, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import Form from '../components/Form';
import t from '../services/translate';
import {apiLogIn, addTask} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const [newTask, setNewTask] = useState();
  const [completed, setCompleted] = useState(false);

  const handleCreate = async () => {
    const token = await AsyncStorage.getItem('token');
    addTask({
      description: newTask,
      tokenStorage: token,
    });
    setNewTask(null);
    navigation.goBack();
  };
  const handleReturn = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Elipse />
      <View style={[styles.container, styles.width100]}>
        <Form ph={t('createTask.taskPlaceHolder')} onChangeText={setNewTask} />
        <View style={styles.separador} />
        <Switch />
        <Text style={styles.txt}>Completed</Text>
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Create Task'} onPress={handleCreate} />
        <Boton title={'Return'} onPress={handleReturn} />
      </View>
    </View>
  );
};
