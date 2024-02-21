import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {DARK} from '../../utils/colors';

const Text = ({
  children,
  fontSize,
  fontWeight,
  color,
  center,
  testID,
  mBottom,
  flex,
  style,
  ...rest
}) => {
  const textStyles = [
    styles.text,
    fontSize && {fontSize},
    fontWeight && {fontWeight},
    color && {color},
    center && {textAlign: 'center'},
    testID && {testID},
    flex && {flex},
    mBottom && {marginBottom: mBottom},
    style,
  ];

  return (
    <RNText style={textStyles} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    // Default text styles here
    color: DARK,
  },
});

export default Text;
