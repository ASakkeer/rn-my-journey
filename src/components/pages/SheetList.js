import React from 'react';
import {Text, View} from '../common';
import {Navbar} from '../layout';
import {PRIMARY_LIGHT} from '../../utils/colors';

function SheetList({navigation}) {
  const navigateToBack = () => {
    navigation.goBack();
  };

  return (
    <View backgroundColor={PRIMARY_LIGHT} flex={1}>
      <Navbar title="YOUR SHEETS" navigateToBack={navigateToBack} />
      <Text>Hekihboj</Text>
    </View>
  );
}

export default SheetList;
