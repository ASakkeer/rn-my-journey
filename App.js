import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BreakSpace,
  Button,
  Text,
  TextInput,
  View,
} from './src/components/common';
import {Header} from './src/components/layout';

function App() {
  return (
    <View flex={1} backgroundColor="#ffffff">
      <Header title="BANK EXPENSES" total={78658} />
      <Text>Hello</Text>
      <BreakSpace />
      <Button>
        <Text textCenter color="#ffffff">
          Click Me
        </Text>
      </Button>
      <BreakSpace />
      <TextInput />
    </View>
  );
}

const _styles = StyleSheet.create({});

export default App;
