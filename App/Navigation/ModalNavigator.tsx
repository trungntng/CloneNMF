import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommingSoonScreen from '../Screens/ComingSoonScreen/CommingSoonScreen';

const ModalStack = createStackNavigator();

const ModalNavigator = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name="ComingSoonScreen"
        component={CommingSoonScreen}
      />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;
