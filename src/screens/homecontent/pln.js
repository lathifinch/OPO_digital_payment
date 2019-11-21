/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  TabHeading,
  Form,
  Item,
  Input,
  Label,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import axios from 'axios';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const imgPLN = require('../../../assets/img/PLN.jpg');

class PLN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNominalPra: '',
      selectedMethodPra: '',
      selectedMethodPasca: '',
      nominal: '1000',
      merchantId: '1',
      opoType: 'opo_cash',
      transactionType: 'prabayar',
    };
  }
  onValueChangeNominalPra(value) {
    this.setState({
      selectedNominalPra: value,
    });
  }
  onValueChangeMethodPra(value) {
    this.setState({
      selectedMethodPra: value,
    });
  }
  componentDidMount() {
    console.log(this.props.user.getUser[0].user_id);
  }
  onValueChangeMethodPasca(value) {
    this.setState({
      selectedMethodPasca: value,
    });
  }

  addPpobPLN() {
    const {nominal, merchantId, opoType, transactionType} = this.state;
    const data = {nominal, merchantId, opoType, transactionType};
    this.setState({
      isLoading: true,
    });

    axios({
      method: 'post',
      url: `http://localhost:5200/api/v1/balance/ppob/out/${this.props.user.getUser[0].user_id}`,
      data: data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    // axios.post(
    //   `http://localhost:5200/api/v1/balance/ppob/out/d8502c57-07f4-463a-bb0d-261047b4db3c`,
    //   data,
    // );
  }
  render() {
    return (
      <ScrollView>
        <View
          style={{borderBottomColor: '#4E2A87', borderBottomWidth: 1, flex: 1}}>
          <Header style={{backgroundColor: '#4E2A87'}} transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="arrow-left"
                  color="#ffffff"
                  size={20}
                  onPress={() => this.props.navigation.navigate('MenuTabs')}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  color: '#FCFCFE',
                  fontSize: 20,
                  marginLeft: 15,
                }}>
                PLN
              </Title>
            </Body>
            <Right />
          </Header>
        </View>
        <View
          style={{
            backgroundColor: '#4E2A87',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={imgPLN}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              marginTop: 15,
              marginBottom: 15,
              marginLeft: 15,
              marginRight: 15,
            }}
          />
          <Text style={{color: '#ffffff', fontSize: 25}}>PLN</Text>
        </View>
        <View>
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: '#ffffff',
              borderColor: '#4E2A87',
              borderBottomWidth: 2,
            }}>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: '#ffffff'}}>
                  <Text>Prabayar</Text>
                </TabHeading>
              }>
              <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <Form>
                  <Item floatingLabel style={{marginBottom: 20}}>
                    <Label>Nomor Meter</Label>
                    <Input style={{marginTop: 10}} />
                  </Item>
                  <Item stackedLabel style={{marginBottom: 20}}>
                    <Label>Nominal</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Nominal"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedNominalPra}
                        onValueChange={this.onValueChangeNominalPra.bind(this)}>
                        <Picker.Item label="Rp20.000" value="10000" />
                        <Picker.Item label="Rp50.000" value="20000" />
                        <Picker.Item label="Rp100.000" value="100000" />
                        <Picker.Item label="Rp200.000" value="key3" />
                        <Picker.Item label="Rp500.000" value="key4" />
                        <Picker.Item label="Rp1.000.000" value="key4" />
                        <Picker.Item label="Rp5.000.000" value="key4" />
                      </Picker>
                    </Item>
                  </Item>
                  <Item stackedLabel>
                    <Label>Metode Pembayaran</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Metode Pembayaran"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedMethodPra}
                        onValueChange={this.onValueChangeMethodPra.bind(this)}>
                        <Picker.Item label="OPO Cash" value="opo_cash" />
                        <Picker.Item label="OPO Points" value="opo_point" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {this.props.user.getUser[0].opo_cash}
                  </Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    onPress={() => this.addPpobPLN()}
                    block
                    rounded
                    style={{backgroundColor: '#06B3BA'}}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Berikutnya
                    </Text>
                  </Button>
                </View>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
                  <Text>Pasca Bayar</Text>
                </TabHeading>
              }>
              <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <Form>
                  <Item floatingLabel style={{marginBottom: 20}}>
                    <Label>ID Pelanggan</Label>
                    <Input style={{marginTop: 10}} />
                  </Item>
                  <Item stackedLabel>
                    <Label>Metode Pembayaran</Label>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{width: undefined, marginLeft: -8}}
                        placeholder="Pilih Metode Pembayaran"
                        placeholderStyle={{color: '#bfc6ea'}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedMethodPasca}
                        onValueChange={this.onValueChangeMethodPasca.bind(
                          this,
                        )}>
                        <Picker.Item label="OPO Cash" value="key0" />
                        <Picker.Item label="OPO Points" value="key1" />
                      </Picker>
                    </Item>
                  </Item>
                </Form>
                <Text style={{marginLeft: 15}}>
                  Sisa Saldo OPO Cash{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {/* {this.props.user.getUser} */}
                  </Text>
                </Text>
                <View style={{marginTop: 30}}>
                  <Button
                    onPress={() => alert('Coming soon.')}
                    block
                    rounded
                    style={{
                      backgroundColor: '#06B3BA',
                    }}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Berikutnya
                    </Text>
                  </Button>
                </View>
              </View>
            </Tab>
          </Tabs>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PLN);
