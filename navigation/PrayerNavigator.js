import { createStackNavigator } from 'react-navigation'

import PrayerScreen from '../screens/PrayerScreen';
import TheLordsPrayer from '../prayers/TheLordsPrayer';

export default PrayerNavigator = createStackNavigator({
	PrayerScreen: { screen: PrayerScreen },
	TheLordsPrayer: { screen: TheLordsPrayer }
});