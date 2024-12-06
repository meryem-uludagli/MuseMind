import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/tasksActions';

const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();
  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      status: status,
      date: date,
    };

    dispatch(UpdateTask(form));
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
      <Button onPress={() => saveTask()} title="Update" status="warning" />
    </View>
  );
};

export default UpdateTask;
