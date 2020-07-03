import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BudgetNavigator from './BottomTab/BudgetNavigator';
import EmissionsNavigator from './BottomTab/EmissionsNavigator';
import SettingsNavigator from './BottomTab/SettingsNavigator';
import TabBarIcon from '../Components/TabBarIcon/TabBarIcon';
import {Colors} from '../Themes';
import {translate} from '../I18n';

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarLabel: translate('TAB_BAR_NAVIGATOR.BUDGET'),
  tabBarIcon: ({focused}) => (
    <TabBarIcon name="ios-calculator" focused={focused} />
  ),
};

const EmissionsOptions = {
  tabBarLabel: 'Emissions',
  tabBarIcon: ({focused}) => <TabBarIcon name="ios-stats" focused={focused} />,
};

const SettingsOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => <TabBarIcon name="ios-switch" focused={focused} />,
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.green50,
        inactiveTintColor: Colors.grey40,
        style: {
          paddingTop: 6,
          backgroundColor: Colors.green10,
          borderTopWidth: 0,
        },
      }}>
      <BottomTab.Screen
        name="BudgetNavigator"
        component={BudgetNavigator}
        options={BudgetOptions}
      />
      <BottomTab.Screen
        name="EmissionsNavigator"
        component={EmissionsNavigator}
        options={EmissionsOptions}
      />
      <BottomTab.Screen
        name="SettingsNavigator"
        component={SettingsNavigator}
        options={SettingsOptions}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
