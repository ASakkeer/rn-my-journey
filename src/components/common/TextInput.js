import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

const TextInput = ({
  borderWidth,
  borderRadius,
  borderColor,
  fontSize,
  vPadding,
  hPadding,
  autoCapitalize = 'none',
  autoCorrect = true,
  autoFocus = false,
  blurOnSubmit = true,
  editable = true,
  keyboardType = 'default',
  maxLength = 250,
  multiline = false,
  numberOfLines = 1,
  onChangeText = () => {},
  placeholder = '',
  placeholderTextColor = '#999',
  color,
  style,
  value,
  testID,
  ...rest
}) => {
  const inputStyles = [
    styles.input,
    borderWidth && {borderWidth},
    borderRadius && {borderRadius},
    borderColor && {borderColor},
    fontSize && {fontSize},
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: hPadding},
    color && {color},
    style,
  ];

  return (
    <RNTextInput
      style={inputStyles}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      blurOnSubmit={blurOnSubmit}
      editable={editable}
      keyboardType={keyboardType}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      testID={testID}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // Default input styles here
    borderBottomWidth: 1,
    borderBottomColor: '#702963',
    paddingHorizontal: 10,
    color: '#000000',
  },
});

export default TextInput;
