import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
// import Spinner from 'react-native-spinkit';
import Color from '../../config/color';

const LoadingScreen = props => {
  const {flag} = props;
  return (
    <Modal isVisible={flag} animationOutTiming={800}>
      <ActivityIndicator size="large" color={Color.app.primary} />
    </Modal>
  );
};

LoadingScreen.propTypes = {
  flag: PropTypes.bool.isRequired,
};

export default LoadingScreen;
