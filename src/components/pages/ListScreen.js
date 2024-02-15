import React, {useState} from 'react';
import {Button, ModalView, Text, TextInput, View} from '../common';
import {Card, Header, NoDataView} from '../layout';
import {PRIMARY_LIGHT, WHITE} from '../../utils/colors';

const dummyData = [
  {
    id: 1,
    title: 'HOME CHEF',
    description: 'Paytm',
    type: 'd',
    value: '60',
  },
  {
    id: 2,
    title: 'PANNAYAAR',
    description: 'GPay',
    type: 'd',
    value: '130',
  },
  {
    id: 3,
    title: 'RAJ GIVE TO ME FOR THE TOKEN FROM THE PUGA',
    description: 'GPay',
    type: 'c',
    value: '2000',
  },
];

function ListScreen() {
  const [expenceData, setExpenceData] = useState(null);
  // const [isVisible, setModalView] = useState(false);

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
        <Button>
          <Text textCenter color={WHITE}>
            CREATE NEW SHEET
          </Text>
        </Button>
      </View>
      {/* <ModalView isVisible={isVisible} title="SELECT EXPENSE TYPE">
        <TextInput />
      </ModalView> */}
    </View>
  );
}

export default ListScreen;
