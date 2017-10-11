import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class CenaClientes extends Component {
  render() {
    return (
    	<View>
        <StatusBar 
          //hidden
          backgroundColor='#B9C941'
        />
        <BarraNavegacao />

        <View style={styles.cabecalho}>
	        <Image source={imagens.detalhe_cliente} />
	        <Text style={styles.txtTitulo}>Nossos Clientes</Text> 
      	</View>

	      <View style={styles.detalhe_cliente}>
	        <Image source={imagens.cliente1} />
	        <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
      	</View>
	      <View style={styles.detalhe_cliente}>
	        <Image source={imagens.cliente2} />
	        <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
      	</View>
	      
	      
      </View>
    );
  }
}

const imagens = {
	detalhe_cliente: require('../imgs/detalhe_cliente.png'),
	cliente1: require('../imgs/cliente1.png'),
	cliente2: require('../imgs/cliente2.png'),
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 30
	},
	txtTitulo: {
		fontSize: 30,
		color: '#B9C941',
		marginLeft: 10,
		marginTop: 25
	},
	detalhe_cliente: {
		padding: 20,
		marginTop: 10
	},
	txtDetalheCliente: {
		fontSize: 18,
		marginLeft: 20
	} 
});