import React, {useEffect, useState} from 'react';
import AddToDo from './AddTodo';
import TodoList from './TodoList';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
// import {database} from '../../data/database';
const TodoApp = ({navigation}) => {
  // const [todos, setTodos] = useState(null);
  // useEffect(() => {
  //   const getTodos = async () => {
  //     const todos = await database.collections.get('todos').query().observe();
  //     setTodos(todos);
  //   };
  //   getTodos();
  // }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.todoList}>
          {/* {todos && <TodoList todos={todos} />} */}
          <TodoList navigation={navigation} />
        </View>
        <AddToDo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  todoList: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default TodoApp;
