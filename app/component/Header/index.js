import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {Header, Left, Body, Title} from 'native-base';
import PropTypes from 'prop-types';
import Styles from './style';

const HeaderComponent = props => {
  const {title, onPress} = props;
  return (
    <Header style={Styles.header}>
      <Left>
        <TouchableOpacity style={Styles.header} onPress={onPress}>
          <Icon
            name="arrowleft"
            color="black"
            size={25}
            style={Styles.headericon}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title style={Styles.title}>{title}</Title>
      </Body>
    </Header>
  );
};

HeaderComponent.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default HeaderComponent;
