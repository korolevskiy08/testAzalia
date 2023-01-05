import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const slice = createSlice({
  name: 'taskList',
  initialState: {
    task: [
      // {id: uuid.v4(), task: 'JSS', checked: false},
      // {id: uuid.v4(), task: 'HTML', checked: false},
      // {id: uuid.v4(), task: 'CSS', checked: true},
    ] as TaskType[],
  },
  reducers: {
    addTask(state, action: PayloadAction<{task: string; checked: boolean}>) {
      state.task.push({
        task: action.payload.task,
        checked: action.payload.checked,
        id: uuid.v4(),
      } as TaskType);
    },
    editStatusTask(state, action: PayloadAction<{id: string; value: boolean}>) {
      state.task.map(el =>
        el.id === action.payload.id
          ? {...el, checked: action.payload.value}
          : el,
      );
    },
    deleteTask(state, action: PayloadAction<{id: string}>) {
      return {
        ...state,
        task: state.task.filter(el => el.id !== action.payload.id),
      };
    },
  },
});

export type TaskType = {
  id: string;
  task: string;
  checked: boolean;
};

export const taskListSlice = slice.reducer;

export const {deleteTask, addTask, editStatusTask} = slice.actions;
