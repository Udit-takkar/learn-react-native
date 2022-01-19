import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import TodoApp from './features/todos/TodoApp';
import TodoScreen from './TodoScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoApp" component={TodoApp} />
      <Stack.Screen name="singleTodo" component={TodoScreen} />
    </Stack.Navigator>
  );
};

const Home = () => {
  return <Text>Welcome to Home!</Text>;
};

const Settings = () => {
  return <Text>Welcome to Settings!</Text>;
};

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todos" component={TodoNavigator} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
