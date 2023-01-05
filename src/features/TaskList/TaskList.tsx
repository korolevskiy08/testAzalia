import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {TaskListProps} from '../../app/navigate/navigate';
import {Logo} from '../../common/Components/Logo';
import {Task} from './Task/Task';

export const TaskList = ({navigation}: TaskListProps) => {
  const task = useAppSelector(state => state.taskList.task);

  const loadAddItem = () => {
    navigation.navigate('AddItem');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBlock}>
        <Logo />
      </View>
      {task.length > 0 ? (
        <FlatList
          style={{flex: 1}}
          data={task}
          renderItem={render => (
            <Task
              task={render.item.task}
              checked={render.item.checked}
              id={render.item.id}
            />
          )}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
            }}>
            У вас нет задач
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: 15,
        }}>
        <Pressable style={styles.addTask} onPress={loadAddItem}>
          <Text style={styles.addTaskText}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 10,
  },
  addTask: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 5,
  },
  addTaskText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },
});
