import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class CenaPrincipal extends Component {
  render() {
    return (
	    <View style={styles.cena}>
	        <StatusBar 
	          //hidden
	          backgroundColor={corBarra}
	        />
	        <BarraNavegacao cor="'#CCC'" />

	        <View style={styles.logo}>
		        <Image source={imagens.logo} />
		      </View>

		      <View style={styles.menu}>
			      <View style={styles.menuGrupo}>

			      	<TouchableHighlight
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'cliente'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_cliente} />
			        </TouchableHighlight>	

			        <TouchableHighlight
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'contato'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_contato} />
			        </TouchableHighlight>	
		      	</View>
			      <View style={styles.menuGrupo}>	

			        <TouchableHighlight
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'empresa'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_empresa} />
			        </TouchableHighlight>	

			        <TouchableHighlight
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'servico'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_servico} />
			        </TouchableHighlight>	
		      	</View>
		      </View>
		      
		      
	    </View>
    );
  }
}

const imagens = {
	logo: require('../imgs/logo.png'),
	menu_cliente: require('../imgs/menu_cliente.png'),
	menu_contato: require('../imgs/menu_contato.png'),
	menu_empresa: require('../imgs/menu_empresa.png'),
	menu_servico: require('../imgs/menu_servico.png')
} 
	
const corBarra = '#CCC';
	
	

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
		marginTop: 30
	},
	menu: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	menuGrupo: {
		alignItems: 'center',
		flexDirection: 'row'
	},
	imgMenu: {
		margin: 15
	} 
});