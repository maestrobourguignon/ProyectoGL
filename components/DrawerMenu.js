import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Avatar from './Avatar';
import {getData} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={styles.menuContainer}>
        <View style={styles.iconoContainer}>
          <Icon size={17} name={props.iconName} color={'black'} />
        </View>
        <View style={styles.tituloContainer}>
          <Text style={styles.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function Menu(props) {
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
    <View style={styles.drawerContainer}>
      <View style={styles.bgContainer}>
        <View style={styles.separador} />
        <TouchableOpacity onPress={() => props.navigation.replace('Profile')}>
          <View style={styles.userContainer}>
            <Avatar style={styles.userImagen} navigation={props.navigation} />
          </View>
          <View style={styles.userNombre}>
            <Text style={styles.userTitulo}>{userName}</Text>
            <Text style={styles.userSubTitulo}>Your Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu
        iconName="home"
        titleName="Home"
        navigation={() => props.navigation.replace('Tasks2')}
      />
      <DrawerMenu
        iconName="user"
        titleName="Profile"
        navigation={() => props.navigation.replace('Profile')}
      />
    </View>
  );
}
