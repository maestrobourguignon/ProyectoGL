import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import t from '../services/translate';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const [image, setImage] = useState(null);

  const HandlePickImage = async () => {
    const options = {
      title: 'You can choose one image',
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
      includeBase64: true,
    };

    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.assets[0];
        setImage(`data:${source.type};base64,${source.base64}`);

        const body = new FormData();
        body.append('avatar', {
          uri: source.uri,
          type: source.type,
          name: source.fileName,
        });
      }
    });
  };

  const HandlePickCamera = async () => {
    // No permissions request is necessary for launching the image library
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else {
        const source = response.assets[0];
        //console.log('fileSize -> ', response.fileSize);
        setImage(`data:${source.type};base64,${source.base64}`);
      }
    });
  };

  const handleReturn = () => {
    navigation.goBack();
  };

  const handleStorage = async () => {
    await AsyncStorage.setItem('avatar', image);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Elipse />
      {image ? (
        <Image source={{uri: image}} style={styles.image} />
      ) : (
        <Image
          source={require('../components/images/onboarding.png')}
          style={styles.img}
        />
      )}
      <View style={styles.separador} />
      <Boton title={'Take Photo'} onPress={HandlePickCamera} />
      <View style={styles.separador} />
      <Boton title={'Upload an image'} onPress={HandlePickImage} />
      <View style={styles.separador} />
      {image ? (
        <>
          <Boton title={'Add as avatar'} onPress={handleStorage} />
          <View style={styles.separador} />
        </>
      ) : null}
      <Boton title={'Return'} onPress={handleReturn} />
      <FlashMessage position="top" />
    </View>
  );
};
