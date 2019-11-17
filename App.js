import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/user/LoginScreen';
import SplashScreen from './src/screens/user/SplashScreen';

const StackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
