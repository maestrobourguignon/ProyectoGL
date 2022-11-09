import React from 'react';
import {View, Image, Text} from 'react-native';
import { Boton } from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';

export default () => {
  return (
    <View style={styles.containerBot}>
      <Elipse />
      <Image
        source={require('../components/images/onboarding.png')}
        style={styles.img}
      />
      <Text style={styles.title}>Gets things done with ToDo</Text>
      <Text style={[styles.txt, styles.txtMargin]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
      <View style={styles.margin60} />
      <Boton title={'Get Started'} />
      <View style={styles.margin60} />
    </View>
  );
};
