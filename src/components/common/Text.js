import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const Text = ({
  children,
  fontSize,
  fontWeight,
  color,
  textCenter,
  testID,
  style,
  ...rest
}) => {
  const textStyles = [
    styles.text,
    fontSize && {fontSize},
    fontWeight && {fontWeight},
    color && {color},
    textCenter && {textAlign: 'center'},
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
    color: '#000000',
  },
});

export default Text;
