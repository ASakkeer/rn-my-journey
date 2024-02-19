import React from 'react';
import {
  View,
  Text,
  Button,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  TouchableOpacity,
} from '../common';
import {StyleSheet} from 'react-native';
import {
  DANGER,
  DARK,
  GREY_MEDIUM,
  GREY_X_LIGHT,
  PRIMARY,
  SUCCESS,
  TRANSPARENT,
  WHITE,
} from '../../utils/colors';

const SheetCard = React.memo(function SheetCard({
  itemData,
  marginBottom = 10,
  setSelectedSheet,
  selectedSheet,
}) {
  const selectTheSheet = item => {
    setSelectedSheet(item);
  };

  console.log(selectedSheet, 'kjojnoj');

  return (
    <TouchableOpacity onPress={() => selectTheSheet(itemData)}>
      <View
        style={[styles.cardContainer, marginBottom && {marginBottom}]}
        row
        vPadding={15}
        hPadding={15}
        borderWidth={1}
        borderColor={
          selectedSheet?.id === itemData?.id ? PRIMARY : TRANSPARENT
        }>
        <View flex={1}>
          <View style={styles.userInfo} row aCenter>
            <Text numberOfLines={1} ellipsizeMode={'tail'} color={PRIMARY}>
              {itemData?.title}
            </Text>
          </View>
          <View row aCenter>
            <Text style={styles.balanceText}>{itemData?.description}</Text>
          </View>
        </View>
        <View jCenter row aCenter>
          <MaterialIcons name="currency-rupee" size={16} color={DARK} />
          <Text style={styles.total} color={DARK}>
            {itemData?.value}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: GREY_X_LIGHT,
    backgroundColor: WHITE,
    borderRadius: 5,
    shadowColor: GREY_MEDIUM,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    marginBottom: 5,
  },
  balanceText: {
    color: GREY_MEDIUM,
    fontSize: 12,
  },
  total: {
    fontSize: 20,
  },
});

export default SheetCard;
