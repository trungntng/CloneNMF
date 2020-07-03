import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CommingSoonScreenProps {}

const CommingSoonScreen = (props: CommingSoonScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CommingSoonScreen</Text>
    </View>
  );
};

export default CommingSoonScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
