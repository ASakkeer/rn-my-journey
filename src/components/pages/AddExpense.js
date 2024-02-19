import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {Text, View, Button, TextInput} from '../common';

import {DARK, WHITE, PRIMARY_LIGHT} from '../../utils/colors';
import {Navbar} from '../layout';

const styles = StyleSheet.create({});

// Functional component definition
function AddExpense({navigation}) {
  const navigateToBack = () => {
    navigation.goBack();
  };

  // Function to render action buttons
  const renderActions = () => (
    <View row>
      <Button
        backgroundColor={DARK}
        flex={1}
        mRight={3}
        onPress={navigateToBack}>
        <Text color={WHITE} textCenter>
          CANCEL
        </Text>
      </Button>
      <Button flex={1} mLeft={3}>
        <Text color={WHITE} textCenter>
          SAVE
        </Text>
      </Button>
    </View>
  );

  const renderAmountSpent = () => (
    <View mBottom={15}>
      <TextInput placeholder="AMOUNT SPENT" />
    </View>
  );

  const renderSpentTo = () => (
    <View mBottom={15}>
      <TextInput placeholder="SPENT TO" />
    </View>
  );

  // JSX rendering
  return (
    <View backgroundColor={PRIMARY_LIGHT} flex={1}>
      <Navbar title="ADD YOUR EXPENSE" navigateToBack={navigateToBack} />
      <View vPadding={15} hPadding={15} flex={1}>
        <View flex={1}>
          {renderAmountSpent()}
          {renderSpentTo()}
        </View>
        <View>{renderActions()}</View>
      </View>
    </View>
  );
}

// Function to render text input component
function renderTextInput(
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      mBottom={15}
    />
  );
}

// Exporting the component as default
export default AddExpense;
