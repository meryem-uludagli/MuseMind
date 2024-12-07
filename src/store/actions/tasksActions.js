import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

export const addNewTask = task => {
  return async dispatch => {
    try {
      if (!task) {
        Alert.alert('Error', 'Task data is missing.');
        return;
      }
      dispatch({
        type: ADDTASK,
        payload: task,
      });
      Alert.alert('Success', 'Task has been added successfully!');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    }
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    try {
      if (!taskId) {
        Alert.alert('Error', 'Task ID is missing.');
        return;
      }
      dispatch({
        type: DELETETASK,
        payload: taskId,
      });
      Alert.alert('Success', 'Task has been deleted successfully!');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    }
  };
};

export const UpdateTask = task => {
  return async dispatch => {
    try {
      if (!task || !task.id) {
        Alert.alert('Error', 'Task data is missing.');
        return;
      }
      dispatch({
        type: UPDATETASK,
        payload: task,
      });
      Alert.alert('Success', 'Task has been updated successfully!');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    }
  };
};
