import React, {useState} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {
  Button,
  FlatList,
  Ionicons,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from '.';
import {
  DARK,
  GREY_LIGHT,
  GREY_X_LIGHT,
  OVERLAY,
  WHITE,
} from '../../utils/colors';

const paymentTypes = [
  {id: 1, name: 'Amazon Pay'},
  {id: 2, name: 'PhonePe'},
  {id: 3, name: 'GPay'},
  {id: 4, name: 'Paytm'},
  {id: 5, name: 'Debit Card: Canara Bank'},
  {id: 6, name: 'Debit Card: TMB'},
  {id: 7, name: 'Cash'},
];

const _styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: OVERLAY,
    justifyContent: 'center',
  },
  eachDropdownOption: {
    borderBottomWidth: 1,
  },
});

function Dropdown({searchOption = false, otherOption = false}) {
  const [state, setState] = useState({
    selectedValue: false,
    enableOptions: false,
    searchText: '',
    otherText: '',
  });

  const handleAction = (key, value) => {
    setState(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const renderValueSection = () => (
    <TouchableOpacity
      borderWidth={1}
      vPadding={15}
      hPadding={15}
      borderRadius={50}
      borderColor={GREY_X_LIGHT}
      row
      aCenter
      jCenter
      onPress={() => handleAction('enableOptions', true)}>
      <Text color={state?.selectedValue ? DARK : GREY_LIGHT} flex={1}>
        {`${
          state?.selectedValue ? state?.selectedValue?.name : 'SELECT AN OPTION'
        }`}
      </Text>
      <Ionicons name="caret-down-outline" color={DARK} />
    </TouchableOpacity>
  );

  const renderOthersContainer = () => (
    <View mTop={15}>
      <TextInput
        placeholder="OTHERS"
        borderRadius={7}
        onChangeText={text => handleAction('otherText', text)}
      />
    </View>
  );

  const renderSearchContainer = () => (
    <View mBottom={15}>
      <TextInput placeholder="SEARCH" borderRadius={7} />
    </View>
  );
  const renderEachOption = ({item}) => (
    <TouchableOpacity
      style={_styles.eachDropdownOption}
      borderColor={GREY_X_LIGHT}
      vPadding={15}
      hPadding={15}
      onPress={() => {
        handleAction('selectedValue', item);
        handleAction('enableOptions', false);
      }}>
      <Text>{item?.name}</Text>
    </TouchableOpacity>
  );

  const renderAllOptions = () => (
    <View>
      <FlatList data={paymentTypes} renderItem={renderEachOption} />
    </View>
  );

  const renderOptions = () => (
    <Modal
      visible={state?.enableOptions}
      transparent={true}
      animationType="fade">
      <View style={_styles.overlay} vPadding={15} hPadding={15}>
        <View
          backgroundColor={WHITE}
          vPadding={15}
          hPadding={15}
          borderRadius={7}>
          {searchOption && renderSearchContainer()}
          {renderAllOptions()}
          {otherOption && renderOthersContainer()}
          {otherOption && (
            <Button
              mTop={15}
              disabled={!state?.otherText}
              onPress={() => {
                handleAction('enableOptions', false);
                handleAction('selectedValue', {name: state?.otherText});
              }}>
              <Text center color={WHITE}>
                SUBMIT
              </Text>
            </Button>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <View>
      {renderValueSection()}
      {renderOptions()}
    </View>
  );
}

export default Dropdown;
