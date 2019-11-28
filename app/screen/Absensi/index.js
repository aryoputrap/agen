/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
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
  Text,
} from 'native-base';
import Style from './style';

export default class absen extends Component {
  render() {
    return (
      <Container>
        <Header iosBarStyle={'dark-content'} style={{backgroundColor: 'white'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon style={{color: 'black'}} name="arrow-back" size={30} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black', fontFamily: 'Montserrat-Bold'}}>
              Absensi
            </Title>
          </Body>
        </Header>
        <Content>
          <View style={Style.bodyAbsen}>
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
          <View style={Style.LineFitur} />
          <Text style={Style.absenHarini}>Absensi Hari Ini</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
            }}>
            <Text style={Style.absenTanggal}>Tanggal</Text>
            <Text style={Style.absenTanggal}>Masuk</Text>
            <Text style={Style.absenTanggal}>Pulang</Text>
          </View>
          <View style={Style.LineFitur} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
              right: 15,
            }}>
            <Text style={([Style.absenTanggalMasukKeluar], {left: 10})}>
              18 Nov 2019
            </Text>
            <Text style={([Style.absenTanggalMasukKeluar], {left: 10})}>
              08:00 WIB
            </Text>
            <Text style={([Style.absenTanggalMasukKeluar], {left: 10})}>
              17:00 WIB
            </Text>
          </View>
          <View style={Style.LineFitur} />
        </Content>
      </Container>
    );
  }
}
