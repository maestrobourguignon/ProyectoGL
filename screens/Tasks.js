import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import t from '../services/translate';
import {getAllTasks, logOut, deleteTask} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '../components/Task';
import ListEmpty from '../components/ListEmpty';
import DeleteModal from '../components/DeleteModal';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import SwipeableFlatList from 'react-native-swipeable-list';
import DeleteButton from '../components/DeleteButton';
import Avatar from '../components/Avatar';

export default ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [taskTxt, setTaskTxt] = useState('');
  const [taskId, setTaskId] = useState('');
  const [myToken, setMyToken] = useState('');

  const getToken = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      setMyToken(token);
      getAllTasks({tokenStorage: token, setTasks: setTasks});
    } catch (e) {
      console.log(e);
      setLoading(false);
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

  const handleDeleteModal = ([txt, id]) => {
    setModal(!modal);
    setTaskTxt(txt);
    setTaskId(id);
  };

  const handleCloseModal = () => {
    setModal(!modal);
    setTaskTxt('');
    setTaskId('');
  };

  const handleDeleteTask = () => {
    deleteTask({id: taskId, tokenStorage: myToken, navigation: navigation});
    showMessage({
      message: 'the task: "' + taskTxt + '" Was deleted successfuly',
      type: 'info',
      icon: 'none',
      statusBarHeight: 40,
    });
    handleCloseModal();
    navigation.addListener();
    getToken();
  };

  const handleEdit = async idSelected => {
    await AsyncStorage.setItem('id', idSelected);
    navigation.navigate('EditTask');
  };

  const handleDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Elipse />
      <TouchableOpacity style={styles.fixedUserImagen} onPress={handleDrawer}>
        <Avatar style={styles.miniUserImagen} navigation={navigation} />
      </TouchableOpacity>
      <View style={[styles.containerList, styles.width100]}>
        <View style={styles.separador} />
        <Text style={styles.title}>To Do List</Text>

        <View style={styles.width100}>
          <SwipeableFlatList
            data={tasks}
            keyExtractor={x => String(x._id)}
            renderItem={({item}) => (
              <Task
                txt={item.description}
                onPress={() => handleEdit(item._id)}
                completed={item.completed}
              />
            )}
            ListEmptyComponent={<ListEmpty onPress={handleNewTask} />}
            maxSwipeDistance={70}
            renderQuickActions={({item}) => (
              <DeleteButton
                onPress={handleDeleteModal}
                txt={item.description}
                id={item._id}
              />
            )}
            refreshing={loading}
            onRefresh={getToken}
          />
        </View>
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Create new Task'} onPress={handleNewTask} />
        <Boton title={'Logout'} onPress={handleLogOut} />
      </View>
      <DeleteModal
        visible={modal}
        close={handleCloseModal}
        task={taskTxt}
        Delete={handleDeleteTask}
      />
      <FlashMessage position="top" />
    </View>
  );
};
