import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const Text = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  testID,
  style,
  ...rest
}) => {
  const textStyles = [
    styles.text,
    fontSize && {fontSize},
    fontWeight && {fontWeight},
    color && {color},
    textAlign && {textAlign},
    testID && {testID},
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
  },
});

export default Text;
