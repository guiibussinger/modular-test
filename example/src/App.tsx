import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import TestView from 'react-native-awesome-module';


export default function App() {

  return (<TestView/>
  );
}

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
