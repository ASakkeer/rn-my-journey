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
import {WHITE} from './src/utils/colors';

function App() {
  return (
    <View flex={1} backgroundColor={WHITE}>
      <Header title="BANK EXPENSES" total={78658} />
      <Text>Hello</Text>
      <BreakSpace />
      <Button>
        <Text textCenter color={WHITE}>
          CLICK ME
        </Text>
      </Button>
      <BreakSpace />
      <TextInput borderWidth={1} borderRadius={50} />
    </View>
  );
}

const _styles = StyleSheet.create({});

export default App;
