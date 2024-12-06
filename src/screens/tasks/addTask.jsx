import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/tasksActions';
import {statusTypes} from '../../utils/constants';

const AddTask = () => {
  const [title, setTitle] = useState('New Task 2');
  const [date, setDate] = useState('20 Ekim 2024');
  const [status, setStatus] = useState(statusTypes.COMPLATED);
  const dispatch = useDispatch();
  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date,
    };

    dispatch(addNewTask(task));
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Input
        onChangeText={(value = setTitle(value))}
        value={title}
        placeholder="Please set title"
        title="Task Title"
      />
      <Input
        onChangeText={(value = setDate(value))}
        value={date}
        placeholder="Please set date"
        title="Task Date"
      />
      <Input
        onChangeText={(value = setStatus(value))}
        value={status}
        placeholder="Please set status"
        title="Task Status"
      />
      <Button onPress={() => saveTask()} title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
