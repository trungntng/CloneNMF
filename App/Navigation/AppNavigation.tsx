import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModalNavigator from './ModalNavigator';
import RootNavigator from './RootNavigator';

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal">
        <AppStack.Screen
          name="RootNavigator"
          component={RootNavigator}
          options={{headerShown: false}}
        />
        <AppStack.Screen name="ModalNavigator" component={ModalNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
