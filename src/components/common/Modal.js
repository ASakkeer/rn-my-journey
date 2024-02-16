import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Text, View} from '.';
import {WHITE, PRIMARY} from '../../utils/colors';
import {FLEX_VALUES, SIZES} from '../../utils/constant';

const _styles = StyleSheet.create({
  modalWhiteContainer: {
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 15,
  },
  modalTitle: {
    fontSize: 16,
    color: PRIMARY,
    textAlign: FLEX_VALUES.CENTER,
    marginBottom: SIZES.MARGIN_15,
  },
});

function ModalView({isVisible, title, children, ...rest}) {
  return (
    <Modal isVisible={isVisible} {...rest}>
      <View style={_styles.modalWhiteContainer}>
        {!!title && <Text style={_styles.modalTitle}>{title}</Text>}
        {children}
      </View>
    </Modal>
  );
}

export default ModalView;
