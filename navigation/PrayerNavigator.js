import { createStackNavigator } from 'react-navigation'

import ListOfPrayersScreen from '../screens/ListOfPrayersScreen';
import OnePrayerScreen from '../prayers/OnePrayerScreen';

export default PrayerNavigator = createStackNavigator({
	ListOfPrayersScreen: { screen: ListOfPrayersScreen },
	OnePrayerScreen: { screen: OnePrayerScreen }
});