import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import { Title } from 'native-base';
// import TabBar from './TabBar';

const TabNavigator = createMaterialTopTabNavigator(
  {
    feed: {
      screen: () => null,
    },
    profile: {
      screen: () => null,
    },
    inbox: {
      screen: () => null,
    },
  },
  // {
  //   tabBarComponent: TabBar,
  // },
);

export default createAppContainer(TabNavigator);
