import React from 'react';
import {Image, StatusBar} from 'react-native';
import {styles} from './styles';

export const Elipse = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image source={require('./images/elipse.png')} style={styles.elipse} />
    </>
  );
};
