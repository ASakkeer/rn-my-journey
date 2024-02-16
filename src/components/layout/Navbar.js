import React from 'react';
import {View, Text, Button, MaterialIcons, Ionicons} from '../common';
import {StyleSheet} from 'react-native';
import {
  DARK,
  GREY_X_LIGHT,
  PRIMARY,
  TRANSPARENT,
  WHITE,
} from '../../utils/colors';

const Navbar = React.memo(function Navbar({
  isWelcome = false,
  title,
  total = '--',
  onIconPress = () => {},
  navigateToBack,
}) {
  return (
    <View style={styles.navbarContainer} row vPadding={15} hPadding={15}>
      <View jCenter>
        <Button backgroundColor={TRANSPARENT} onPress={navigateToBack}>
          <Ionicons name="chevron-back" size={18} color={DARK} />
        </Button>
      </View>
      <View flex={1} jCenter>
        <Text fontSize={16} color={PRIMARY}>
          {title}
        </Text>
      </View>
      <View jCenter>
        <Button backgroundColor={TRANSPARENT} onPress={onIconPress}>
          <Ionicons name="ellipsis-vertical" size={18} color={DARK} />
        </Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  navbarContainer: {
    borderBottomWidth: 1,
    borderColor: GREY_X_LIGHT,
  },
});

export default Navbar;
