import React from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

const KeyboardAvoidingView = ({
  behavior = 'padding',
  enabled = true,
  keyboardVerticalOffset = 0,
  style,
  children,
  ...rest
}) => {
  return (
    <RNKeyboardAvoidingView
      behavior={behavior}
      enabled={enabled}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.container, style]}
      {...rest}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingView;
