import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import Form from '../components/Form';
// import t from '../services/translate';
import {editTask, getTaskById} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';

export default ({navigation}) => {
  const [editedTask, setEditedTask] = useState();
  const [completed, setCompleted] = useState(false);
  const [taskId, setTaskId] = useState();
  // const [taskData, setTaskData] = useState([]);

  const handleCompleted = () => {
    setCompleted(!completed);
  };

  const handleEdit = async () => {
    const token = await AsyncStorage.getItem('token');
    editTask({
      description: editedTask,
      completed: completed,
      tokenStorage: token,
      id: taskId,
      navigation: navigation,
    });
    setEditedTask(null);
    await AsyncStorage.removeItem('id');
    navigation.goBack();
  };
  const handleReturn = async () => {
    await AsyncStorage.removeItem('id');
    navigation.goBack();
  };

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('id');
      getTaskById({
        id: id,
        tokenStorage: token,
        setEditedTask: setEditedTask,
        setTaskId: setTaskId,
        setCompleted: setCompleted,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Elipse />
      <View style={[styles.container, styles.width100]}>
        <Form
          ph={'Edit your task'}
          onChangeText={setEditedTask}
          text={editedTask}
        />
        <View style={styles.separador} />
        <Pressable style={styles.center} onPress={handleCompleted}>
          <Switch onValueChange={handleCompleted} value={completed} />
          <Text style={styles.txt}>Completed</Text>
        </Pressable>
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Edit Task'} onPress={handleEdit} />
        <Boton title={'Return'} onPress={handleReturn} />
      </View>
      <FlashMessage position="top" />
    </View>
  );
};
