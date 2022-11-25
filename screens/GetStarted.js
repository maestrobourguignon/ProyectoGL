import React from 'react';
import {View, Image, Text} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Boton} from '../components/Boton';
import {Elipse} from '../components/Elipse';
import {styles} from '../components/styles';
import t from '../services/translate';

export default ({navigation}) => {
  const handleGetStarted = () => {
    navigation.replace('Tasks');
  };

  return (
    <View style={styles.containerBot}>
      <Elipse />
      <Image
        source={require('../components/images/onboarding.png')}
        style={styles.img}
      />
      <Text style={styles.title}>Gets things done with ToDo</Text>
      <View style={styles.separador} />
      <Text style={[styles.txt, styles.txtMargin]}>
        {t('onboarding.description')}
      </Text>
      <View style={styles.margin60} />
      <Boton title={'Get Started'} onPress={handleGetStarted} />
      <View style={styles.margin60} />
      <FlashMessage position="top" />
    </View>
  );
};
