import React, {FC, useState} from 'react';
import Checkbox from 'expo-checkbox';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTask, editStatusTask} from '../taskList-slice';
import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';

export type TaskType = {
  task: string;
  checked: boolean;
  id: string;
};

export const Task: FC<TaskType> = ({task, checked, id}) => {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(checked);

  const editStatus = () => {
    setChecked(!isChecked);
    dispatch(editStatusTask({id, value: isChecked}));
  };

  const removeTask = () => {
    dispatch(deleteTask({id}));
  };

  const DeleteButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: 'center',
        aspectRatio: 1,
        flexDirection: 'column',
        padding: 15,
      }}>
      <TouchableOpacity onPress={removeTask}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  return (
    <View style={styles.taskContainer}>
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        leftButtons={DeleteButton}
        rightButtons={DeleteButton}>
        <View style={styles.task}>
          <Checkbox
            color={'black'}
            value={isChecked}
            onValueChange={editStatus}
          />
          <Text style={!isChecked ? styles.textTask : styles.notActive}>
            {task}
          </Text>
        </View>
      </SwipeItem>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    width: '90%',
    height: 40,
    marginVertical: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    //shadow for Android
    shadowOpacity: 0.88,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    elevation: 10,
    //shadow for IOS
    shadowRadius: 10,
  },
  taskContainer: {
    width: '100%',
    alignItems: 'center',
  },
  notActive: {
    paddingHorizontal: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  textTask: {
    paddingHorizontal: 20,
    color: 'black',
  },
  button: {
    width: '100%',
    height: 40,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
