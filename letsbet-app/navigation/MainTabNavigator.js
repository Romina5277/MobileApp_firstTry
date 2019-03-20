import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MeldungScreen from '../screens/MeldungScreen';
import WetteScreen from '../screens/WetteScreen';
import ProfilScreen from '../screens/ProfilScreen';
import WetteFormScreen from '../screens/WetteFormScreen';
import WetteInfosScreen from '../screens/WetteInfosScreen';

const MeldungStack = createStackNavigator({
  Meldung: MeldungScreen,
});

MeldungStack.navigationOptions = {
  tabBarLabel: 'Meldung',
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

const WetteStack = createStackNavigator({
  Wette: WetteScreen,
});

WetteStack.navigationOptions = {
  tabBarLabel: 'Wette',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfilStack = createStackNavigator({
  Profil: ProfilScreen,
});

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};



export default createBottomTabNavigator({
  MeldungStack,
  WetteStack,
  ProfilStack,
});
