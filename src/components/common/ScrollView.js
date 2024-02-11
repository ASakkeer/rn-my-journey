import React from 'react';
import {ScrollView as RNScrollView, StyleSheet} from 'react-native';

const ScrollView = ({
  contentContainerStyle,
  horizontal = false,
  keyboardDismissMode = 'none',
  keyboardShouldPersistTaps = 'handled',
  onScroll,
  scrollEventThrottle = 16,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = true,
  testID,
  style,
  children,
  ...rest
}) => {
  const scrollViewStyles = [styles.scrollView, style];

  return (
    <RNScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      keyboardDismissMode={keyboardDismissMode}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      testID={testID}
      style={scrollViewStyles}
      {...rest}>
      {children}
    </RNScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // Default ScrollView styles here
  },
});

export default ScrollView;
