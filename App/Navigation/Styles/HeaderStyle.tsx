import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  header: {
    borderBottomColor: Colors.green10,
    borderBottomWidth: 2,
    shadowColor: 'transparent',
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  headerTitle: {
    fontSize: Fonts.FontSize.H1,
    color: Colors.black,
  },
});
