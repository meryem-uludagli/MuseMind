import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
