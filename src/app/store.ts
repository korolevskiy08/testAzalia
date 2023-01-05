import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {AnyAction, combineReducers} from 'redux';
import {taskListSlice} from '../features/TaskList/taskList-slice';

const rootReducer = combineReducers({
  taskList: taskListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

// types
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
