import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Styles from './style';

const ModalImage = props => {
  const {source, isVisible, Press} = props;
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'android'
      ? Dimensions.get('window').height
      : ExtraDimensions.get('REAL_WINDOW_HEIGHT');
  return (
    <View>
      <Modal
        backdropOpacity={0.5}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1000}
        animationOutTiming={500}
        isVisible={isVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
        <TouchableOpacity onPress={Press}>
          <View style={Styles.modalSize}>
            <Image
              style={Styles.imageModal}
              resizeMode={'stretch'}
              source={source}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

ModalImage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  source: PropTypes.object.isRequired,
};

export default ModalImage;
