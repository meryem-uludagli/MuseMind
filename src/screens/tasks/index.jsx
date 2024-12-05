import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';

const Tasks = () => {
  const {tasks} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Henuz bir is olusturulmadi
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatActionButton />
    </View>
  );
};

export default Tasks;
