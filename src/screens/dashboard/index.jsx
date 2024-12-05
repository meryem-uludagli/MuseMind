import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStausCard from '../../components/dashboard/tasksStausCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryChart, VictoryTheme} from 'victory-native';

const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary'} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {taskStatus.map(item => (
            <TasksStausCard item={item} key={item.id} />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <VictoryPie
            padAngle={1}
            width={380}
            height={350}
            data={[
              {x: 'In Review', y: 15},
              {x: 'In Progress', y: 50},
              {x: 'Complated', y: 25},
              {x: 'On Hold', y: 10},
            ]}
            theme={VictoryTheme.clean}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
