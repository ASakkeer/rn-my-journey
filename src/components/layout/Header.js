import React from 'react';
import {View, Text, Button, MaterialIcons, Ionicons} from '../common';
import {StyleSheet} from 'react-native';

const Header = React.memo(function Header({
  isWelcome = false,
  title,
  total = 0,
  onIconPress = () => {},
}) {
  return (
    <View style={styles.headerContainer} row vPadding={15} hPadding={15}>
      <View flex={1}>
        <View style={styles.userInfo} row aCenter>
          {isWelcome && <Text>Welcome, </Text>}
          <Text fontSize={16} color={title ? '#702963' : '#000000'}>
            {title || 'SAKKEER'}
          </Text>
        </View>
        <View row aCenter>
          <MaterialIcons name="currency-rupee" size={16} color="#702963" />
          <Text style={styles.balanceText} fontSize={22}>
            {total}
          </Text>
        </View>
      </View>
      <View jCenter>
        <Button backgroundColor="#ffffff" onPress={onIconPress}>
          <Ionicons name="documents-outline" size={22} color="#000000" />
        </Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  userInfo: {
    flex: 1,
    marginBottom: 5,
  },
  balanceText: {
    marginLeft: 5,
  },
});

export default Header;
