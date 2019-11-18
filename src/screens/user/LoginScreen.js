import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, Image} from 'react-native';
import {Button, Form, Item, Label, Input, Icon} from 'native-base';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNumberValid: false,
      isButton: false,
    };
  }
  SignAlert = () => {
    Alert.alert('Perhatian!', 'Nomor ponsel tidak valid');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
        <View style={styles.InputText}>
          <Form>
            <Item floatingLabel>
              <Icon name="person" style={styles.iconNumber} />
              <Label style={styles.labelInput}> Nomor Ponsel</Label>
              <Input
                style={styles.InputPonsel}
                maxLength={15}
                keyboardType={'numeric'}
              />
            </Item>
          </Form>
        </View>
        <Button block bordered light style={styles.buttonInputValid}>
          <Text style={styles.ButtonTextValid}>SIGN IN</Text>
        </Button>
        <Text style={styles.atau}> ───────────── ATAU ───────────── </Text>
        <Button block style={styles.buttonInputJoin}>
          <Text style={styles.ButtonText}>JOIN NOW</Text>
        </Button>
        <Button
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
          block
          transparent
          style={styles.buttonHelp}>
          <Image
            style={styles.iconHelp}
            source={require('../../../assets/img/needhelp.png')}
          />
          <Text style={styles.HelpText}>Butuh bantuan?</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
  },
  iconNumber: {
    color: '#fff',
  },
  buttonHelp: {
    marginTop: 10,
  },
  InputPonsel: {
    color: '#fff',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
  iconHelp: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  HelpText: {
    color: '#00d2d3',
    fontSize: 15,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  direction: {
    flexDirection: 'row',
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  labelInput: {
    color: '#fff',
    fontSize: 15,
  },
  InputText: {
    marginLeft: 20,
    marginRight: 30,
    color: '#fff',
  },
  ButtonText: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  ButtonTextInValid: {
    marginLeft: 20,
    marginRight: 20,
    color: '#b2bec3',
  },
  ButtonTextValid: {
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
  },
  buttonInputValid: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
  },
  buttonInputInValid: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
    borderColor: '#b2bec3',
  },
  buttonInputJoin: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    color: '#fff',
    borderRadius: 30,
    backgroundColor: '#22a6b3',
  },
  atau: {
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
    fontSize: 12,
  },
});

export default LoginScreen;
