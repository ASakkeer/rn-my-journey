import React from 'react';
import {View, StyleSheet} from 'react-native';

const BreakSpace = ({height = 10, width = '100%', style, ...rest}) => {
  return <View style={[styles.breakSpace, {height, width}, style]} {...rest} />;
};

const styles = StyleSheet.create({
  breakSpace: {
    // Default styles here
  },
});

export default BreakSpace;
