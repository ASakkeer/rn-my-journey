import React from 'react';
import {
  View,
  Text,
  Button,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '../common';
import {StyleSheet} from 'react-native';
import {
  DANGER,
  DARK,
  GREY_MEDIUM,
  GREY_X_LIGHT,
  PRIMARY,
  SUCCESS,
  WHITE,
} from '../../utils/colors';

const Card = React.memo(function Card({itemData, marginBottom = 10}) {
  return (
    <View
      style={[styles.cardContainer, marginBottom && {marginBottom}]}
      row
      vPadding={15}
      hPadding={15}>
      <View flex={1}>
        <View style={styles.userInfo} row aCenter>
          <Text color={PRIMARY}>{itemData?.title}</Text>
        </View>
        <View row aCenter>
          <Text style={styles.balanceText}>{itemData?.description}</Text>
        </View>
      </View>
      <View jCenter row aCenter>
        <MaterialCommunityIcons
          name={itemData?.type === 'd' ? 'minus' : 'plus'}
          color={itemData?.type === 'd' ? DANGER : SUCCESS}
          size={16}
        />

        <Text
          style={styles.total}
          color={itemData?.type === 'd' ? DANGER : SUCCESS}>
          {itemData?.value}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: GREY_X_LIGHT,
    backgroundColor: WHITE,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    marginBottom: 5,
  },
  balanceText: {
    marginLeft: 5,
    color: GREY_MEDIUM,
    fontSize: 12,
  },
  total: {
    fontSize: 20,
  },
});

export default Card;
