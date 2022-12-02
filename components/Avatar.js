import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';

export default ({style, navigation}) => {
  const [avatar, setAvatar] = useState(null);
  const defaultAvatar = './images/DefaultAvatar.png';

  const handleAvatar = async () => {
    const Avatar = await AsyncStorage.getItem('avatar');
    setAvatar(Avatar);
  };

  useEffect(() => {
    navigation.addListener('focus', async () => {
      handleAvatar();
    });
  }, [navigation]);

  if (!avatar) {
    return <Image source={require(defaultAvatar)} style={style} />;
  } else {
    return <Image source={{uri: avatar}} style={style} />;
  }
};
