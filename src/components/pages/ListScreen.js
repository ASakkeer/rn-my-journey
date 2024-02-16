import React, {useState} from 'react';
import {Button, Text, View} from '../common';
import {Card, Header, NoDataView} from '../layout';
import {WHITE, PRIMARY_LIGHT} from '../../utils/colors';
import {AddSheet} from '.';

function ListScreen() {
  const [expenceData, setExpenceData] = useState(null);
  const [showAddSheet, setAddSheetModal] = useState(false);

  return (
    <View flex={1} backgroundColor={PRIMARY_LIGHT}>
      <Header isWelcome />
      <View vPadding={15} hPadding={15} flex={1}>
        <View flex={1}>
          {expenceData?.map(item => (
            <Card itemData={item} key={item?.id} />
          ))}
          {!expenceData && <NoDataView content="NO SHEET" />}
        </View>
        <Button onPress={() => setAddSheetModal(true)}>
          <Text textCenter color={WHITE}>
            CREATE NEW SHEET
          </Text>
        </Button>
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

export default ListScreen;
