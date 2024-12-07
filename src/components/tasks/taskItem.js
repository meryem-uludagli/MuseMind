import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ThemeColors, themeColors} from '../../theme/colors';
import {Calendar, Edit, Trash} from 'iconsax-react-native';
import {setColors} from '../../utils/functions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {UPDATETASK} from '../../utils/routes';
import {deleteTask} from '../../store/actions/tasksActions';

const TaskItem = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeItem = () => {
    Alert.alert('Warning', 'Do you want to remove the task?', [
      {
        text: 'Remove',
        onPress: () => dispatch(deleteTask(item.id)),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.cotainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
            <Edit size="32" color={themeColors.darkblue} variant="Outline" />
          </TouchableOpacity>
          <TouchableOpacity onPress={removeItem}>
            <Trash size="32" color={themeColors.red} variant="Outline" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.statusContainer,
          {backgroundColor: setColors(item.status)},
        ]}>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Calendar size={25} />
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  cotainer: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    width: '95%',
    height: 150,
    margin: 10,
    borderColor: ThemeColors.black,
    borderWidth: 1,
    elevation: 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusContainer: {
    borderColor: ThemeColors.black,
    borderWidth: 1,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    color: ThemeColors.darkGray,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  date: {
    fontSize: 17,
    color: ThemeColors.black,
  },
});
