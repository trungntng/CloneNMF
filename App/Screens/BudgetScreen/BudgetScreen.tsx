import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CommonHeaderStyle from '../../Navigation/Styles/HeaderStyle';
import {useDispatch} from 'react-redux';
import TestActions from '../../Redux/Test/TestActions';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const navigationOptions = {
  headerStyle: {
    ...CommonHeaderStyle.header,
  },
  headerTitle: () => (
    <Text style={{...CommonHeaderStyle.headerTitle}}>{'Budget'}</Text>
  ),
};

interface BudgetScreenProps {}

const BudgetScreen = (props: BudgetScreenProps) => {
  const [title, setTitle] = useState('BudgetScreen');
  useEffect(() => {
    // async function fetchData() {
    //   const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => response.json())
    //     .then((json) => JSON.stringify(json));
    //   // .then((json) => console.log(json));
    //   setTitle(json);
    // }
    // fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

BudgetScreen.navigationOptions = navigationOptions;

export default BudgetScreen;
