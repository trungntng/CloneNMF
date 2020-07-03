import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmissionsScreen from '../../Screens/EmissionsScreen/EmissionsScreen';

const EmissionsStack = createStackNavigator();

const EmissionsNavigator = () => {
  return (
    <EmissionsStack.Navigator>
      <EmissionsStack.Screen
        name="EmissionsScreen"
        component={EmissionsScreen}
      />
    </EmissionsStack.Navigator>
  );
};

export default EmissionsNavigator;
