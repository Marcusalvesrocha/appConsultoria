/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';

export default class appConsultoria extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('appConsultoria', () => appConsultoria);
