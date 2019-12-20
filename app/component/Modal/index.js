import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Styles from './style';

const LoadingScreen = props => {
  const {TextModal, source, isVisible, Press, IniImage} = props;
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'android'
      ? Dimensions.get('window').height
      : ExtraDimensions.get('REAL_WINDOW_HEIGHT');
  return (
    <View>
      <Modal
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1000}
        animationOutTiming={200}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={500}
        isVisible={isVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
        <TouchableOpacity onPress={Press}>
          <View style={Styles.modalSize}>
            <Image
              style={Styles.imageModal}
              resizeMode={'stretch'}
              source={source}>
              {IniImage}
            </Image>
            <Text style={Styles.text}>{TextModal}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

LoadingScreen.propTypes = {
  TextModal: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default LoadingScreen;
