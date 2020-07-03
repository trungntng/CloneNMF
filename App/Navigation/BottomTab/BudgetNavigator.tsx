import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BudgetScreen from '../../Screens/BudgetScreen/BudgetScreen';

const BudgetStack = createStackNavigator();

const BudgetNavigator = () => {
  return (
    <BudgetStack.Navigator>
      <BudgetStack.Screen
        name="BudgetScreen"
        component={BudgetScreen}
        options={BudgetScreen.navigationOptions}
      />
    </BudgetStack.Navigator>
  );
};

export default BudgetNavigator;
