import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const TodoScreen = ({route, navigation}) => {
  const {id} = route.params;
  const todos = useSelector(state => state.todos.entities);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Task:- {todos[id].text}</Text>
        <Text>
          Status:-
          {todos[id].isComplete ? (
            <Text>Completed</Text>
          ) : (
            <Text>Not Completed</Text>
          )}
        </Text>
        <Text>ID:- {id}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TodoScreen;
