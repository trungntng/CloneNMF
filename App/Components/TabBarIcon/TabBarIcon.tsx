import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Themes';

interface Props {
  name: string;
  focused: boolean;
}

const TabBarIcon = (props: Props) => {
  return (
    <Icon
      name={props.name}
      size={26}
      color={props.focused ? Colors.green50 : Colors.grey40}
      style={{marginBottom: -6}}
    />
  );
};

export default TabBarIcon;
