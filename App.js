import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ListScreen} from './src/components/pages';

function App() {
  return (
    <SafeAreaProvider>
      <ListScreen />
    </SafeAreaProvider>
  );
}

export default App;
