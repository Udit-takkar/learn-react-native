import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {todoAdded} from './todosSlice';
// import {saveTodo} from '../../data/helpers';
let todoId = 0;
const AddToDo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      // await saveTodo({text});
      dispatch(todoAdded({id: ++todoId, text, isComplete: false}));
      setText('');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
    flex: 1,
  },
});
export default AddToDo;
