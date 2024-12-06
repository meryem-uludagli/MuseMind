import {StyleSheet, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStausCard from '../../components/dashboard/tasksStausCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);
  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status.length);
  };
  const calculateTaskStatus = status => {
    const totalTask = tasks.length;
    const taskCount = tasks.filter(item => item?.status === status.length);
    const percentage = ((totalTask / taskCount) * 100).toFixed(2);
  };
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
            <TasksStausCard
              value={countTaskStatus(item.status)}
              item={item}
              key={item.id}
            />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <VictoryPie
            padAngle={1}
            width={380}
            height={350}
            data={[
              {
                x: calculateTaskStatus(statusType.INPROGRESS),
                y: calculateTaskStatus(statusType.INPROGRESS),
              },
              {
                x: calculateTaskStatus(statusType.INREVIEW),
                y: calculateTaskStatus(statusType.INREVIEW),
              },
              {
                x: calculateTaskStatus(statusType.COMPLETED),
                y: calculateTaskStatus(statusType.COMPLETED),
              },
              {
                x: calculateTaskStatus(statusType.ONHOLD),
                y: calculateTaskStatus(statusType.ONHOLD),
              },
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
