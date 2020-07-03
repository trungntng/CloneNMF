import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../Screens/IntroScreen/IntroScreen';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const hasAcceptedTermsOfUseVersion = true;
  return (
    <RootStack.Navigator>
      {hasAcceptedTermsOfUseVersion ? (
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Screen name="IntroScreen" component={IntroScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
