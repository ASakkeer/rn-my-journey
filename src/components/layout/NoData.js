import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../common';
import {GREY_MEDIUM} from '../../utils/colors';

const _styles = StyleSheet.create({
  content: {
    color: GREY_MEDIUM,
  },
});

function NoDataView({content}) {
  return (
    <View flex={1} jCenter aCenter>
      <Text style={_styles.content}>{content}</Text>
    </View>
  );
}

export default NoDataView;
