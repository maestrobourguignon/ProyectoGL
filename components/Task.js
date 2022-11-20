import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default ({children, onPress, onLongPress}) => {
  return (
    <TouchableOpacity
      style={[styles.width100, styles.center]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.taskContainer}>
        <Text style={styles.txt}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
