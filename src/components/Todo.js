import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

function Todo({todoId, handleComplete, todos, navigation, removeTodo}) {
  return (
    <View key={todoId} style={styles.todoContainer}>
      <CheckBox
        disabled={false}
        value={todos[todoId].isComplete}
        onValueChange={newValue => handleComplete(todoId, newValue)}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('singleTodo', {
            id: todoId,
          })
        }>
        <Text style={styles.todoText}>{todos[todoId].text}</Text>
      </TouchableOpacity>
      <Icon
        onPress={() => removeTodo(todoId)}
        style={styles.closeBtn}
        name="close"
        color="red"
        size={30}
      />
    </View>
  );
}

export default Todo;
const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  todoText: {
    fontSize: 25,
    marginHorizontal: 10,
  },
});
