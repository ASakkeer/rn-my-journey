import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  BreakSpace,
  Button,
  Text,
  TextInput,
  View,
} from './src/components/common';
import {Card, Header} from './src/components/layout';
import {PRIMARY_LIGHT, WHITE} from './src/utils/colors';

const dummyData = [
  {
    id: 1,
    title: 'HOME CHEF',
    description: 'Paytm',
    type: 'd',
    value: '60',
  },
  {
    id: 2,
    title: 'PANNAYAAR',
    description: 'GPay',
    type: 'd',
    value: '130',
  },
  {
    id: 3,
    title: 'BALAJI GAVE',
    description: 'GPay',
    type: 'c',
    value: '2000',
  },
];

function App() {
  return (
    <SafeAreaProvider>
      <View flex={1} backgroundColor={PRIMARY_LIGHT}>
        <Header title="BANK EXPENSES" total={78658} />
        <View vPadding={15} hPadding={15} flex={1}>
          <View flex={1}>
            {dummyData?.map(item => (
              <Card itemData={item} key={item?.id} />
            ))}
          </View>
          <Button>
            <Text textCenter color={WHITE}>
              CLICK ME
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const _styles = StyleSheet.create({});

export default App;
