/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {
  Container,
  Content,
  Card,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
} from 'native-base';
import Style from './style';

const {width, height} = Dimensions.get('window');
export default class absen extends Component {
  render() {
    return (
      <Container>
        <Header iosBarStyle={'dark-content'} style={{backgroundColor: 'white'}}>
          <Left>
            <Button transparent>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Absensi</Title>
          </Body>
        </Header>
        <Content>
          <View
            style={{
              top: 20,
              flexDirection: 'row',
              marginLeft: 10,
              width: width * 0.9,
              height,
            }}>
            <TouchableOpacity style={Style.tombolCard}>
              <Card style={Style.cardAbsen}>
                <Image
                  source={require('../../asset/images/enter.png')}
                  resizeMode={'stretch'}
                />
              </Card>
              <Text
                style={([Style.textCard], {marginLeft: 30, textAlign: 'auto'})}>
                Masuk
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={([Style.tombolCard], {marginLeft: 1})}>
              <Card style={Style.cardAbsen}>
                <Image
                  source={require('../../asset/images/logout.png')}
                  resizeMode={'stretch'}
                />
              </Card>
              <Text
                style={([Style.textCard], {marginLeft: 30, textAlign: 'auto'})}>
                Pulang
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
