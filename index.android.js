/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'
import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class appConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={ { id: 'a' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */
          if(route.id === 'a') {
            return(<CenaPrincipal navigator={navigator} />);
          }

          if(route.id === 'b') {
            return(<CenaClientes />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('appConsultoria', () => appConsultoria);
