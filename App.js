import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BreakSpace,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from './src/components/common';

function App() {
  return (
    <View flex={1} vPadding={15} hPadding={15}>
      <Text>Hello</Text>
      <BreakSpace />
      <Button
        backgroundColor="orange"
        vPadding={15}
        hPadding={15}
        color="black"
        title={'Click Me'}
        borderRadius={30}
      />
      <BreakSpace />
      <TextInput
        borderWidth={1}
        hPadding={15}
        placeholder="Search something..."
        borderRadius={30}
        backgroundColor="grey"
        placeholderTextColor={'blue'}
        color="green"
      />
      <BreakSpace />
      <TouchableOpacity
        backgroundColor="orange"
        vPadding={15}
        hPadding={15}
        borderWidth={1}
        borderRadius={30}>
        <Text color="green">I am also a button</Text>
      </TouchableOpacity>
    </View>
  );
}

const _styles = StyleSheet.create({});

export default App;
