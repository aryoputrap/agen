import * as React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Tab from './Tab';

const TabBar = props => {
  const {navigationState, navigation, position} = props;
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 80,
        backgroundColor: 'seashell',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {navigationState.routes.map((route, index) => {
        const focusAnim = position.interpolate({
          //   inputRange: [index - 1, index, index + 1],
          inputRange: [index - 1, index + 1],
          outputRange: [0, 0],
        });
        return (
          <Tab
            focusAnim={focusAnim}
            title={route.routeName}
            onPress={() => navigation.navigate(route.routeName)}
          />
        );
      })}
      <TouchableOpacity
        onPress={() => {
          // toggle drawer or dispatch any other arbitrary action
          Alert.alert('You pressed the menu button!');
        }}>
        <Text>🍔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
