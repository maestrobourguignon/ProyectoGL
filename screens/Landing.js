import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';

export default ({navigation}) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      navigation.replace('LogIn');
    } else {
      navigation.replace('Tasks');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Elipse />
      <Text style={styles.title}>My ToDo List</Text>
      <Image
        source={require('../components/images/elipse.png')}
        style={styles.elipse2}
      />
    </View>
  );
};
