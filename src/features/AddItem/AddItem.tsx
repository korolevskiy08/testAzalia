import React, {FC} from 'react';
import {
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../TaskList/taskList-slice';

export const AddItem: FC = () => {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();

  const addNewTask = () => {
    dispatch(addTask({task: text, checked: false}));
    onChangeText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Текст новой задачи"
      />
      <Pressable
        disabled={text.length === 0}
        style={text.length === 0 ? styles.buttonDisabled : styles.button}
        onPress={addNewTask}>
        <Text style={styles.textButton}>Добавить</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    color: 'black',
    fontSize: 20,
  },
  button: {
    width: '90%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  buttonDisabled: {
    width: '90%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  textButton: {
    color: 'white',
  },
});
