import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, connect} from 'react-redux';
import UserAction from '../../Redux/User/UserAction';
import {bindActionCreators} from 'redux';

interface EmissionsScreenProps {}

const EmissionsScreen = (props: EmissionsScreenProps) => {
  const dispatch = useDispatch();
  // const signInFunc = (dispatch) => {
  //   () => dispatch(UserAction.signIn.request);
  // };
  useEffect(() => {
    console.tron.log('EmissionsScreen');
    const signIn = () => dispatch(UserAction.signIn.request());
    signIn();
  }, [dispatch]);
  // useEffect(() => {
  //   props.signIn();
  // }, [props]);

  return (
    <View style={styles.container}>
      <Text>EmissionsScreen</Text>
    </View>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       signIn: UserAction.signIn.request,
//     },
//     dispatch,
//   );
// };

// export default connect(null, mapDispatchToProps)(EmissionsScreen);
export default EmissionsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
