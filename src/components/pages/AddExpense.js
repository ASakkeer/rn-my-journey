import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dropdown,
} from '../common';

import {
  DARK,
  WHITE,
  PRIMARY_LIGHT,
  GREY_LIGHT,
  GREY_MEDIUM,
  PRIMARY,
  SUCCESS,
  DANGER,
  GREY_X_LIGHT,
} from '../../utils/colors';
import {Navbar} from '../layout';
import {
  Accessory,
  Cloths,
  ECommerce,
  Electricity,
  Food,
  Gas,
  Hospital,
  Petrol,
  Receiving,
  Recharge,
  Router,
  Savings,
  Sending,
  Shoe,
  Trip,
  VehicleService,
  Water,
} from '../../assets/images';

const _styles = StyleSheet.create({});

const SPENT_TYPE = [
  {
    id: 1,
    source: Food,
    type: 'Food',
  },
  {
    id: 2,
    source: Petrol,
    type: 'Petrol',
  },
  {
    id: 3,
    source: Recharge,
    type: 'Recharge',
  },
  {
    id: 4,
    source: Electricity,
    type: 'Electricity',
  },
  {
    id: 5,
    source: Gas,
    type: 'Gas',
  },
  {
    id: 6,
    source: Savings,
    type: 'Savings',
  },
  {
    id: 7,
    source: VehicleService,
    type: 'Service',
  },
  {
    id: 8,
    source: Trip,
    type: 'Trip',
  },
  {
    id: 9,
    source: Cloths,
    type: 'Cloths',
  },
  {
    id: 10,
    source: Accessory,
    type: 'Accessory',
  },
  {
    id: 11,
    source: Shoe,
    type: 'Shoe',
  },
  {
    id: 12,
    source: Hospital,
    type: 'Hospital',
  },
  {
    id: 13,
    source: Router,
    type: 'Router',
  },
  {
    id: 14,
    source: ECommerce,
    type: 'E-Commerce',
  },
  {
    id: 15,
    source: Water,
    type: 'Water',
  },
];

// Functional component definition
function AddExpense({navigation}) {
  const [state, setState] = useState({
    amountSpent: '',
    spentTo: '',
    spentType: null,
    expenseType: null,
  });

  const navigateToBack = () => {
    navigation.goBack();
  };

  const handleFormAction = (key, value) => {
    setState(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Function to render action buttons
  const renderActions = () => (
    <View row>
      <Button
        backgroundColor={DARK}
        flex={1}
        mRight={3}
        onPress={navigateToBack}>
        <Text color={WHITE} center>
          CANCEL
        </Text>
      </Button>
      <Button flex={1} mLeft={3}>
        <Text color={WHITE} center>
          SAVE
        </Text>
      </Button>
    </View>
  );

  const renderAmountSpent = () => (
    <View mBottom={15}>
      <TextInput
        placeholder="AMOUNT SPENT"
        onChangeText={text => handleFormAction('amountSpent', text)}
        keyboardType="number-pad"
      />
    </View>
  );

  const renderSpentTo = () => (
    <View mBottom={15}>
      <TextInput
        placeholder="DESCRIPTION"
        onChangeText={text => handleFormAction('spentTo', text)}
      />
    </View>
  );

  const renderEachSpentType = ({item}) => {
    const isSelected = state?.spentType?.id === item?.id;
    const borderColor = isSelected ? PRIMARY : GREY_MEDIUM;
    const opacity = isSelected ? 1 : 0.4;
    return (
      <TouchableOpacity
        flex={1}
        mBottom={5}
        jCenter
        aCenter
        onPress={() => handleFormAction('spentType', item)}>
        <View
          borderWidth={1}
          vPadding={15}
          hPadding={15}
          borderRadius={50}
          borderColor={borderColor}
          mBottom={2}
          opacity={opacity}>
          <Image source={item?.source} width={30} height={30} />
        </View>
        <Text fontSize={10} center color={isSelected ? PRIMARY : DARK}>
          {item?.type}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSpentType = () => (
    <View flex={1}>
      <Text mBottom={5}>SPENT TYPE</Text>
      <FlatList
        data={SPENT_TYPE}
        renderItem={renderEachSpentType}
        numColumns={5}
      />
    </View>
  );

  const renderExpenceType = () => (
    <View row mBottom={15}>
      <Button
        backgroundColor={PRIMARY_LIGHT}
        flex={1}
        mRight={3}
        row
        aCenter
        jCenter
        borderWidth={1}
        borderColor={state?.expenseType === 'c' ? PRIMARY : GREY_X_LIGHT}
        onPress={() => handleFormAction('expenseType', 'c')}>
        <Image
          mRight={5}
          source={Receiving}
          width={20}
          height={20}
          opacity={state?.expenseType === 'c' ? 1 : 0.5}
        />
        <Text color={state?.expenseType === 'c' ? SUCCESS : GREY_LIGHT} center>
          RECEIVED
        </Text>
      </Button>
      <Button
        backgroundColor={PRIMARY_LIGHT}
        flex={1}
        mLeft={3}
        row
        aCenter
        jCenter
        borderWidth={1}
        borderColor={state?.expenseType === 'd' ? PRIMARY : GREY_X_LIGHT}
        onPress={() => handleFormAction('expenseType', 'd')}>
        <Image
          mRight={5}
          source={Sending}
          width={20}
          height={20}
          opacity={state?.expenseType === 'd' ? 1 : 0.5}
        />
        <Text color={state?.expenseType === 'd' ? DANGER : GREY_LIGHT} center>
          SENDING
        </Text>
      </Button>
    </View>
  );

  const renderCustomDropdown = () => (
    <View mBottom={15}>
      <Dropdown />
    </View>
  );

  // JSX rendering
  return (
    <View
      backgroundColor={PRIMARY_LIGHT}
      flex={1}
      keyboardShouldPersistTaps="always">
      <Navbar title="ADD YOUR EXPENSE" navigateToBack={navigateToBack} />
      <View vPadding={15} hPadding={15} flex={1}>
        <View flex={1}>
          {renderAmountSpent()}
          {renderExpenceType()}
          {renderSpentTo()}
          {renderCustomDropdown()}
          {renderSpentType()}
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
