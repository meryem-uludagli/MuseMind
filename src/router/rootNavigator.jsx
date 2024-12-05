import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {DASHBOARD, TASKS} from '../utils/routes';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={TASKS} component={Tasks} />
    </Stack.Navigator>
  );
}

export default App;
