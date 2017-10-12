import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class CenaEmpresa extends Component {
  render() {
    return (
    	<View>
        <StatusBar 
          //hidden
          backgroundColor='#FF7141'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
	        <Image source={imagens.detalhe_empresa} />
	        <Text style={styles.txtTitulo}>Empresas</Text>
      	</View>

	      <View style={styles.detalhe_empresa}>
	        <Text style={styles.txtDetalheEmpresa}>React Desenvolvimento</Text>
	        <Text style={styles.txtDetalheEmpresa}>Av. Beira Rio, 135</Text>
	        <Text style={styles.txtDetalheEmpresa}>Paulo Afonso-BA</Text>
	        <Text style={styles.txtDetalheEmpresa}>CEP: 48.604-000</Text>
	        <Text style={styles.txtDetalheEmpresa}>(75) 9 9287-8857</Text>
	        <Text style={styles.txtDetalheEmpresa}>reactdesenvolvimento@gmail.com</Text>
      	</View>
	      
	      
      </View>
    );
  }
}

const imagens = {
	detalhe_empresa: require('../imgs/detalhe_empresa.png')
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 30
	},
	txtTitulo: {
		fontSize: 30,
		color: '#FF7141',
		marginLeft: 10,
		marginTop: 35
	},
	detalhe_empresa: {
		padding: 10
	},
	txtDetalheEmpresa: {
		fontSize: 18,
		marginLeft: 15
	}
});