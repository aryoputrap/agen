// import React from 'react';
// import {View, Text} from 'react-native';
// export default class SelectedScreen extends React.Component {
//   static navigationOptions = ({navigation}) => ({
//     tabBarLabel: ({focused}) => (
//       <View
//         style={{
//           width: 80,
//           borderRadius: 30,
//           padding: 10,
//           backgroundColor: focused ? 'red' : 'blue',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Text
//           style={{
//             color: focused ? 'red' : 'blue',
//             fontSize: 12,
//           }}>
//           {navigation.state.routeName}
//         </Text>
//       </View>
//     ),
//   });
//   constructor(props) {
//     super(props);
//     this.state = {
//       screen: '',
//     };
//   }
//   screenIs = payload => {
//     this.setState({screen: payload.state.routeName});
//   };

//   render() {
//     const {navigation} = this.props;
//     return (
//       <View style={styles.container}>
//         <NavigationEvents onWillFocus={this.screenIs} />
//         <Text>{this.state.screen}</Text>
//       </View>
//     );
//   }
// }
