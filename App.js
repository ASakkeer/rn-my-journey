import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddSheet, ListScreen, SheetList} from './src/components/pages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="ListScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="AddSheet" component={AddSheet} />
          <Stack.Screen name="SheetList" component={SheetList} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
