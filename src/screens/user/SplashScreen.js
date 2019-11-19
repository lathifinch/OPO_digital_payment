import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('IntroScreen');
    }, 4000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textScreen}>OPO</Text>
        <Text style={styles.subTitle}>Digital Payment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4E2A87',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  textScreen: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 50,
  },
});
