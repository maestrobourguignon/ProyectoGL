import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
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
import t from '../services/translate';
import {getAllTasks, tokenLogIn} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [tokenStorage, setTokenStorage] = useState(null);

  //al setear el tokenStorage se coloca como Null y no se loguea
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setTokenStorage(token);
      console.log(tokenStorage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
    getAllTasks({tokenStorage: tokenStorage});
  }, []);

  return (
    <View style={styles.container}>
      <Elipse />

      <View style={[styles.containerList, styles.width100]}>
        <Text style={styles.title}>To Do List</Text>
        <FlatList />
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Create new Task'} />
        <Boton title={'Logout'} />
      </View>
    </View>
  );
};
