import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default ({txt}) => {
  return (
    <View style={[styles.center]}>
      <View style={styles.taskContainer}>
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </View>
  );
};
