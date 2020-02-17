import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors.js';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={25}
      style={{ marginBottom: -4 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
