import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {todoRemoved, toggleIsCompleted} from '../todos/todosSlice';
// import withObservables from '@nozbe/with-observables';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

Icon.loadFont().then();

// import {observeTodos} from '../../data/helpers';

function TodoList({navigation}) {
  const todos = useSelector(state => state.todos.entities);
  const allTodosIds = useSelector(state => state.todos.ids);
  const dispatch = useDispatch();
  console.log('todos are here ', todos);

  if (!allTodosIds || !allTodosIds.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }
  const handleComplete = (id, newValue) => {
    dispatch(toggleIsCompleted(id, newValue));
  };
  const removeTodo = id => {
    console.log('Ola');
    dispatch(todoRemoved(id));
  };
  return (
    <View style={styles.container}>
      {allTodosIds.map((todoId, index) => (
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
      ))}
    </View>
  );
}
// const enhanceWithTodos = withObservables(['todos'], ({todos}) => ({
// todos: observeTodos(),
// todos: database.get('todos').query().observe(),
//   todos,
// }));
// export default enhanceWithTodos(TodoList);
export default TodoList;
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
