import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BreakSpace,
  Button,
  Text,
  TextInput,
  View,
} from './src/components/common';

function App() {
  return (
    <View flex={1} vPadding={15} hPadding={15} backgroundColor="#ffffff">
      <Text>Hello</Text>
      <BreakSpace />
      <Button title="Click Me" />
      <BreakSpace />
      <TextInput />
    </View>
  );
}

const _styles = StyleSheet.create({});

export default App;
