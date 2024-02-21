import React, {useState} from 'react';
import {Button, FlatList, Ionicons, Text, View} from '../common';
import {Navbar, NoDataView, SheetCard} from '../layout';
import {
  DARK,
  GREY,
  GREY_MEDIUM,
  PRIMARY_LIGHT,
  SECONDARY,
  SUCCESS,
  WHITE,
} from '../../utils/colors';
import {AddSheet} from '.';

function SheetList({navigation}) {
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [showAddSheet, setAddSheetModal] = useState(false);

  const sheetData = [
    {
      id: 1,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 2,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 3,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 4,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 5,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 6,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 7,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 8,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
    {
      id: 9,
      title: 'BANK EXPENCSES',
      description: 'Maintain my daily expenses',
      value: '76567',
    },
  ];

  const navigateToBack = () => {
    navigation.goBack();
  };

  const renderSheet = ({item}) => (
    <SheetCard
      itemData={item}
      setSelectedSheet={setSelectedSheet}
      selectedSheet={selectedSheet}
    />
  );

  return (
    <View backgroundColor={PRIMARY_LIGHT} flex={1}>
      <Navbar title="YOUR SHEETS" navigateToBack={navigateToBack} />
      <View vPadding={15} hPadding={15} flex={1}>
        <View flex={1}>
          {/* <NoDataView content="NO SHEET" /> */}
          <FlatList data={sheetData} renderItem={renderSheet} />
        </View>
        <View row>
          <Button
            flex={1}
            mRight={3}
            backgroundColor={DARK}
            onPress={navigateToBack}>
            <Text center color={WHITE}>
              CANCEL
            </Text>
          </Button>
          <Button mRight={3} mLeft={3} onPress={() => setAddSheetModal(true)}>
            <Ionicons name="add" size={18} color={WHITE} />
          </Button>
          <Button flex={1} mLeft={3} disabled={!selectedSheet}>
            <Text center color={WHITE}>
              VIEW
            </Text>
          </Button>
        </View>
      </View>
      {showAddSheet && (
        <AddSheet
          showAddSheet={showAddSheet}
          setAddSheetModal={setAddSheetModal}
        />
      )}
    </View>
  );
}

export default SheetList;
