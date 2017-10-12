import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class CenaContatos extends Component {
  render() {
    return (
	    <View style={styles.cena}>
	        <StatusBar 
	          //hidden
	          backgroundColor='#61BD8C'
	        />
	        <BarraNavegacao voltar navigator={this.props.navigator} />

	        <View style={styles.cabecalho}>
		        <Image source={imagens.detalhe_contato} />
		        <Text style={styles.txtTitulo}>Contatos</Text>
	      	</View>

		      <View style={styles.detalhe_contatos}>
		        <Text style={styles.txtDetalheContatos}>Marcus Rocha</Text>
		        <Text style={styles.txtDetalheContatos}>(75) 3281-4476</Text>
		        <Text style={styles.txtDetalheContatos}>(75) 9 9287-8857</Text>
		        <Text style={styles.txtDetalheContatos}>sif.marcusvinicius@gmail.com</Text>
	      	</View>
		      
		      
	    </View>
    );
  }
}

const imagens = {
	detalhe_contato: require('../imgs/detalhe_contato.png')
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 30
	},
	txtTitulo: {
		fontSize: 30,
		color: '#61BD8C',
		marginLeft: 10,
		marginTop: 35
	},
	detalhe_contatos: {
		padding: 10
	},
	txtDetalheContatos: {
		fontSize: 18,
		marginLeft: 20
	},
	cena: {
		flex: 1,
		backgroundColor: '#FFF'
	}
});