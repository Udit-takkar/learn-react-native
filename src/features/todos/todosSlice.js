import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter({
  selectId: ({id}) => id,
});

console.log(todosAdapter.getInitialState());
const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoRemoved: todosAdapter.removeOne,
    toggleIsCompleted: (state, action) => {
      const {id, newValue} = action.payload;
      const todo = state.entities[id];
      if (todo && todo.isComplete !== newValue) {
        todo.isComplete = newValue;
      }
    },
  },
});

export const {todoAdded, todoRemoved, toggleIsCompleted} = todosSlice.actions;

export default todosSlice.reducer;
