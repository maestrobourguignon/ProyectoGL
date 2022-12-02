import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Avatar from '../components/Avatar';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import {getData} from '../services/api';
import t from '../services/translate';

export default ({navigation}) => {
  const handleChangeImg = () => {
    navigation.navigate('SetImage');
  };
  const handleDeleteImg = async () => {
    await AsyncStorage.removeItem('avatar');
    navigation.addListener();
    navigation.replace('Profile');
  };
  const handleReturn = () => {
    navigation.replace('Tasks');
  };
  const [userName, setUserName] = useState();
  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      getData({tokenStorage: token, setData: setUserName});
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Elipse />
      <View style={[styles.containerList, styles.width100, styles.center]}>
        <TouchableOpacity onPress={handleChangeImg}>
          <Avatar style={styles.bigUserImagen} navigation={navigation} />
        </TouchableOpacity>
        <Text style={styles.title}>{userName}</Text>
      </View>
      <View style={[styles.botContainer, styles.width100]}>
        <Boton title={'Change Avatar'} onPress={handleChangeImg} />
        <Boton title={'Delete Avatar'} onPress={handleDeleteImg} />
        <Boton title={'Return'} onPress={handleReturn} />
      </View>
      <FlashMessage position="top" />
    </View>
  );
};
