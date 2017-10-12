import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class CenaServico extends Component {
  render() {
    return (
    	<View>
        <StatusBar 
          //hidden
          backgroundColor='#19D1C8'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
	        <Image source={imagens.detalhe_servico} />
	        <Text style={styles.txtTitulo}>Nossos Serviços</Text>
      	</View>

	      <View style={styles.detalhe_servico}>
	        <Text style={styles.txtDetalheServico}>Desenvolvimento Mobile</Text>
	        <Text style={styles.txtDetalheServico}>Desenvolvimento Web</Text>
      	</View>
	      
	      
      </View>
    );
  }
}

const imagens = {
	detalhe_servico: require('../imgs/detalhe_servico.png')
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 30
	},
	txtTitulo: {
		fontSize: 30,
		color: '#19D1C8',
		marginLeft: 10,
		marginTop: 35
	},
	detalhe_servico: {
		padding: 10
	},
	txtDetalheServico: {
		fontSize: 18,
		marginLeft: 15
	}
});