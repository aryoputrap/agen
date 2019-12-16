import React from 'react';
import {ActivityIndicator} from 'react-native';

import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
// import {Colors} from '../../config/color';

const LoadingScreen = props => {
  const {flag} = props;

  return (
    <Modal isVisible={flag} animationOutTiming={800}>
      <ActivityIndicator size="large" color={'red'} />
    </Modal>
  );
};

LoadingScreen.propTypes = {
  flag: PropTypes.bool.isRequired,
};

export default LoadingScreen;
