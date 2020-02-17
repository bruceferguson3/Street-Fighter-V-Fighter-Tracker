import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon.js';
import HomeScreen from '../screens/HomeScreen.js';
import SearchPlayerScreen from '../screens/SearchPlayerScreen.js';
import FavoritePlayerScreen from '../screens/FavoritePlayerScreen.js';
import TopPlayerScreen from "../screens/TopPlayerScreen.js";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const SearchPlayerStack = createStackNavigator(
  {
    Links: SearchPlayerScreen,
  },
  config
);

SearchPlayerStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchPlayerStack.path = '';

const FavoritePlayerStack = createStackNavigator(
  {
    Settings: FavoritePlayerScreen,
  },
  config
);

FavoritePlayerStack.navigationOptions = {
  tabBarLabel: 'Favorite Players',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};

FavoritePlayerStack.path = '';

const TopPlayerStack = createStackNavigator(
    {
        TopPlayers: TopPlayerScreen,
    },
    config
);

TopPlayerStack.navigationOptions = {
    tabBarLabel: 'Top Players',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />
    ),
};

TopPlayerStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack: SearchPlayerStack,
  SettingsStack: FavoritePlayerStack,
  TopPlayerStack,
});

tabNavigator.path = '';

export default tabNavigator;
