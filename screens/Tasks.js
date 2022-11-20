import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, Vibration, View} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import t from '../services/translate';
import {getAllTasks, logOut} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '../components/Task';
import ListEmpty from '../components/ListEmpty';

export default ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      getAllTasks({tokenStorage: token, setTasks: setTasks});
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', async () => {
      getToken();
    });
  }, [navigation]);

  const handleNewTask = () => {
    navigation.navigate('NewTask');
  };

  const handleLogOut = async () => {
    const token = await AsyncStorage.getItem('token');
    logOut({tokenStorage: token, navigation: navigation});
  };

  return (
    <View style={styles.container}>
      <Elipse />

      <View style={[styles.containerList, styles.width100]}>
        <Text style={styles.title}>To Do List</Text>
        {loading ? (
          <ActivityIndicator size={'large'} color={'blue'} />
        ) : (
          <View style={styles.width100}>
            <FlatList
              data={tasks}
              keyExtractor={x => String(x._id)}
              renderItem={({item}) => <Task>{item.description}</Task>}
              ListEmptyComponent={<ListEmpty onPress={handleNewTask} />}
            />
          </View>
        )}
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Create new Task'} onPress={handleNewTask} />
        <Boton title={'Logout'} onPress={handleLogOut} />
      </View>
    </View>
  );
};
