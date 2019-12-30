/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';
import {Chat} from '../../component/Chat';
import {View} from 'native-base';
// import {Images} from '../../configs';
// import Styles from './styles';
// import {Images, Colors} from '../../configs';

export default class ContactDistributor extends Component {
  static navigationOptions = ({navigation}) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });
  static navigationOptions = {
    title: 'Scv Chatter',
  };

  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Haloooo admin farma klik^_^!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar:
              'https://merahputih.com/media/54/89/37/5489377530c2722732f8c38c39d8fbc9.jpg',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: Chat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Chat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' && <KeyboardAvoidingView />}
      </View>
    );
  }
}
