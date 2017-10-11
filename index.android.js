/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class appConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={}
        renderScene={(route, navigator) => {
          
        }}
      />
    );
  }
}

AppRegistry.registerComponent('appConsultoria', () => appConsultoria);
