import {StyleSheet, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStausCard from '../../components/dashboard/tasksStausCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import {statusTypes} from '../../utils/constants';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);
  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status.length);
  };
  const calculateTaskStatus = status => {
    const totalTask = tasks.length;
    const taskCount = tasks.filter(item => item?.status === status.length);
    const percentage = (taskCount / 100).toFixed(2);
    return percentage;
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
                x: calculateTaskStatus(statusTypes.INPROGRESS),
                y: calculateTaskStatus(statusTypes.INPROGRESS),
              },
              {
                x: calculateTaskStatus(statusTypes.INREVIEW),
                y: calculateTaskStatus(statusTypes.INREVIEW),
              },
              {
                x: calculateTaskStatus(statusTypes.COMPLETED),
                y: calculateTaskStatus(statusTypes.COMPLETED),
              },
              {
                x: calculateTaskStatus(statusTypes.ONHOLD),
                y: calculateTaskStatus(statusTypes.ONHOLD),
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
