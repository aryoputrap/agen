import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
  },
};

const Boot = props => {
  const {children} = props;
  return <View style={styles.container}>{children}</View>;
};

Boot.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boot);
