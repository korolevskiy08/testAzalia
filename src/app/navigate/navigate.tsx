import {TaskList} from '../../features/TaskList/TaskList';
import {AddItem} from '../../features/AddItem/AddItem';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {SplashScreen} from '../../features/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{title: 'Вернуться назад'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  TaskList: undefined;
  AddItem: undefined;
  SplashScreen: undefined;
};

export type TaskListProps = NativeStackScreenProps<
  RootStackParamList,
  'TaskList'
>;

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;
