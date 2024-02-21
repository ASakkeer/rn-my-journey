// Importing necessary modules from React and React Native
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

// Importing common components from a custom path
import {Text, View, Button, TextInput, ModalView} from '../common';

// Importing color constants
import {DARK, WHITE, PRIMARY, PRIMARY_LIGHT} from '../../utils/colors';

// Importing constant values
import {SIZES} from '../../utils/constant';

// StyleSheet for component styling
const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 18,
    color: PRIMARY,
    textAlign: 'center',
    marginBottom: 15,
  },
});

// Functional component definition
function AddSheet({showAddSheet, setAddSheetModal}) {
  // State to manage sheet data
  const [sheetData, setSheetData] = useState({
    title: '',
    description: '',
    total: '',
  });

  // State to manage save button disabled status
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  // Effect to enable/disable save button based on form completeness
  useEffect(() => {
    const isEmpty = Object.values(sheetData).some(value => value === '');
    setIsSaveDisabled(isEmpty);
  }, [sheetData]);

  // Handler function for input changes
  const handleInputChange = (key, value) => {
    setSheetData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Function to render sheet title
  const renderSheetTitle = () => (
    <Text style={styles.pageTitle}>ADD NEW SHEET</Text>
  );

  // Function to render action buttons
  const renderActions = () => (
    <View row>
      <Button
        backgroundColor={DARK}
        flex={1}
        mRight={3}
        onPress={() => setAddSheetModal(false)}>
        <Text color={WHITE} center>
          CANCEL
        </Text>
      </Button>
      <Button flex={1} mLeft={3} disabled={isSaveDisabled}>
        <Text color={WHITE} center>
          SAVE
        </Text>
      </Button>
    </View>
  );

  // JSX rendering
  return (
    <ModalView isVisible={showAddSheet} flex={1}>
      <View backgroundColor={PRIMARY_LIGHT}>
        {renderSheetTitle()}
        <View>
          {renderTextInput('TITLE', sheetData.title, value =>
            handleInputChange('title', value),
          )}
          {renderTextInput('DESCRIPTION', sheetData.description, value =>
            handleInputChange('description', value),
          )}
          {renderTextInput(
            'TOTAL AMOUNT',
            sheetData.total,
            value => handleInputChange('total', value),
            'number-pad',
          )}
        </View>
        {renderActions()}
      </View>
    </ModalView>
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
export default AddSheet;
