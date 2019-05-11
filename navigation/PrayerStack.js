import { createStackNavigator } from 'react-navigation'

import ListOfPrayersScreen from '../screens/prayers/ListOfPrayersScreen';
import OnePrayerScreen from '../screens/prayers/OnePrayerScreen';

export default PrayerStack = createStackNavigator({
	ListOfPrayersScreen: { screen: ListOfPrayersScreen },
	OnePrayerScreen: { screen: OnePrayerScreen }
});