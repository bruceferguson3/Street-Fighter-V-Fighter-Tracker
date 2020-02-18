import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator.js';
import UserLoginScreen from "../screens/UserLoginScreen.js";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: UserLoginScreen,
    Main: MainTabNavigator,
  })
);
