import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {todoRemoved, toggleIsCompleted} from '../todos/todosSlice';
// import withObservables from '@nozbe/with-observables';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

Icon.loadFont().then();

// import {observeTodos} from '../../data/helpers';

const selectCompletedTodos = createSelector(
  state => state.todos.entities,
  todos => {
    return Object.entries(todos).filter(([key, todo]) => todo.isComplete);
  },
);

const selectNotCompletedTodos = createSelector(
  state => state.todos.entities,
  todos => {
    return Object.entries(todos).filter(([key, todo]) => !todo.isComplete);
  },
);

function TodoList({navigation}) {
  const allTodosIds = useSelector(state => state.todos.ids);
  const todos = useSelector(state => state.todos.entities);
  const dispatch = useDispatch();
  const completedTodos = useSelector(selectCompletedTodos);
  const notCompletedTodos = useSelector(selectNotCompletedTodos);
  console.log('dekh', notCompletedTodos);

  console.log('todos are here ', todos);

  if (!allTodosIds || !allTodosIds.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }

  const handleComplete = (id, newValue) => {
    dispatch(toggleIsCompleted({id, newValue}));
  };
  const removeTodo = id => {
    console.log('Ola');
    dispatch(todoRemoved(id));
  };
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Not Completed Todod', data: notCompletedTodos},
          {title: 'Completed Todos', data: completedTodos},
        ]}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          const todoId = item[0];
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
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
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
    fontSize: 20,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 25,
    backgroundColor: '#fff',
  },
});
