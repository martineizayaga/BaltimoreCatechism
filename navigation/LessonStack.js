import { createStackNavigator } from 'react-navigation'

import ListOfLessonsScreen from '../screens/lessons/ListOfLessonsScreen';
import OneLessonScreen from '../screens/lessons/OneLessonScreen';

export default LessonStack = createStackNavigator({
	ListOfLessonsScreen: { screen: ListOfLessonsScreen },
	OneLessonScreen: { screen: OneLessonScreen }
});