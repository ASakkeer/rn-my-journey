import React, {useState} from 'react';
import {Button, Text, View} from '../common';
import {Card, Header, NoDataView} from '../layout';
import {WHITE, PRIMARY_LIGHT} from '../../utils/colors';
import {AddExpense, AddSheet} from '.';

function ListScreen({navigation}) {
  const [expenceData, setExpenceData] = useState(null);
  const [showAddSheet, setAddSheetModal] = useState(false);

  const renderCreateSheetButton = () => (
    <Button onPress={() => setAddSheetModal(true)}>
      <Text textCenter color={WHITE}>
        CREATE NEW SHEET
      </Text>
    </Button>
  );

  const renderExpenceList = () => (
    <View flex={1}>
      {expenceData?.map(item => (
        <Card itemData={item} key={item?.id} />
      ))}
      {!expenceData && <NoDataView content="NO DATA" />}
    </View>
  );

  const renderAddSheetModal = () => (
    <AddSheet showAddSheet={showAddSheet} setAddSheetModal={setAddSheetModal} />
  );

  const renderHeader = () => (
    <Header
      isWelcome
      onIconPress={() => {
        navigation.navigate('SheetList');
      }}
    />
  );

  const renderAddExpenceButton = () => (
    <Button onPress={() => navigation?.navigate('AddExpense')}>
      <Text textCenter color={WHITE}>
        ADD EXPENSE
      </Text>
    </Button>
  );

  return (
    <View flex={1} backgroundColor={PRIMARY_LIGHT}>
      {renderHeader()}
      <View vPadding={15} hPadding={15} flex={1}>
        {renderExpenceList()}
        {/* {renderCreateSheetButton()} */}
        {renderAddExpenceButton()}
      </View>
      {showAddSheet && renderAddSheetModal()}
    </View>
  );
}

export default ListScreen;
