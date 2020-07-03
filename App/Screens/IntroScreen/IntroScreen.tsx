import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IntroScreenProps {}

const IntroScreen = (props: IntroScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>IntroScreen</Text>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
