import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../../Screens/AboutScreen/AboutScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="AboutScreen" component={AboutScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
