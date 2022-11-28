import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';

export default ({txt, onPress, completed}) => {
  return (
    <View style={[styles.center]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.taskContainer, styles.row]}>
          <Text style={styles.txt}>{txt}</Text>
          <View>
            {completed ? (
              <Text style={[styles.completeTxt, styles.complete]}>✓</Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
