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
	          backgroundColor={cor}
	        />
	        <BarraNavegacao corBarra={cor} />

	        <View style={styles.logo}>
		        <Image source={imagens.logo} />
		      </View>

		      <View style={styles.menu}>
			      <View style={styles.menuGrupo}>

			      	<TouchableHighlight
			      		underlayColor={'#B9C941'}
			      		activeOpacity={0.7}
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'cliente'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_cliente} />
			        </TouchableHighlight>	

			        <TouchableHighlight
			      		underlayColor={'#61BD8C'}
			      		activeOpacity={0.7}
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'contato'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_contato} />
			        </TouchableHighlight>	
		      	</View>
			      <View style={styles.menuGrupo}>	

			        <TouchableHighlight
			      		underlayColor={'#EC7148'}
			      		activeOpacity={0.7}
			      		onPress={()=>{
			      			this.props.navigator.push({ id: 'empresa'});
			      		}}
			      	>
			        	<Image style={styles.imgMenu} source={imagens.menu_empresa} />
			        </TouchableHighlight>	

			        <TouchableHighlight
			      		underlayColor={'#19D1C8'}
			      		activeOpacity={0.7}
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
	
const cor = '#CCC';

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