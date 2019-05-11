import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListOfPrayersScreen from '../screens/ListOfPrayersScreen';
import PrayerNavigator from './PrayerNavigator';
import OnePrayerScreen from '../prayers/OnePrayerScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Lessons',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const PrayerStack = createStackNavigator({
  ListOfPrayersScreen: ListOfPrayersScreen,
  OnePrayerScreen: OnePrayerScreen
});

PrayerStack.navigationOptions = {
  tabBarLabel: 'Prayers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  PrayerStack,
});
