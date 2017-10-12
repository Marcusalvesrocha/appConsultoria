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

import {Navigator} from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class appConsultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={ { id: 'principal' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */
          if(route.id === 'principal') {
            return(<CenaPrincipal navigator={navigator} />);
          }

          if(route.id === 'cliente') {
            return(<CenaClientes navigator={navigator} />);
          }

          if(route.id === 'contato') {
            return(<CenaContatos navigator={navigator} />);
          }

          if(route.id === 'empresa') {
            return(<CenaEmpresa navigator={navigator} />);
          }

          if(route.id === 'servico') {
            return(<CenaServico navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('appConsultoria', () => appConsultoria);
