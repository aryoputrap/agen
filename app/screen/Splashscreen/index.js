import React, {Component} from 'react';
import {
  //   Platform,
  Linking,
  View,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';

// import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
// import {createIDSetToken} from '../../redux/auth/authActions';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.4,
    height: height * 0.125,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

class SplashScreen extends Component {
  componentDidMount() {
    this.interval = setTimeout(() => {
      if (this.props.loggedIn) {
        this.props.navigation.navigate('StackPublic');
      } else {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
          }),
        );
      }
    }, 10000);
    // if (Platform.OS === 'android') {
    //   Linking.getInitialURL().then(url => {
    //     this.navigate(url);
    //   });
    // } else {
    //   Linking.addEventListener('url', this.handleOpenURL);
    // }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
    clearInterval(this.interval);
  }

  handleOpenURL = event => {
    this.navigate(event.url);
  };

  //   navigate = url => {
  //     if (url) {
  //       const route = url.replace(/.*?:\/\//g, '');
  //       const id = route.match(/\/([^\/]+)\/?$/)[1];
  //       const routeName = route.split('/');
  //       if (routeName[1] === 'createID') {
  //         this.props.createIDSetToken(routeName[2]);
  //         this.props.navigation.navigate('CreateIDScreen');
  //         clearInterval(this.interval);
  //       }
  //     }
  //   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          source={require('../../asset/images/open_screen/SC.png')}
          resizeMode={'stretch'}
          style={styles.container}>
          <Image
            source={require('../../asset/images/open_screen/logoputih.png')}
            resizeMode={'stretch'}
            style={styles.icon}
          />
        </ImageBackground>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   action: state.auth.action,
//   loggedIn: state.account.loggedIn,
// });

// const mapDispatchToProps = {
//   createIDSetToken: payload => createIDSetToken(payload),
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SplashScreen);
export default SplashScreen;
