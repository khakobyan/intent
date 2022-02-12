import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native'
import { App } from './Root'

LogBox.ignoreAllLogs();
AppRegistry.registerComponent('intent', () => App)
