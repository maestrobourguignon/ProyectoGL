import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {styles} from './styles';

export default ({onPress, txt, id}) => {
  return (
    <Pressable onPress={() => onPress([txt, id])}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteBtn}>Delete</Text>
      </View>
    </Pressable>
  );
};
