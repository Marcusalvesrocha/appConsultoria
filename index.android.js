/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';

export default class appConsultoria extends Component {
  render() {
    return (
      <View>
        <StatusBar 
          //hidden
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('appConsultoria', () => appConsultoria);
