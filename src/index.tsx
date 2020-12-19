import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const TestView = () => (
  <View style={styles.container}>
    <Text>Result: {3*7}</Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default TestView;