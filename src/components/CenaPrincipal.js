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
    	<View>
        <StatusBar 
          //hidden
          backgroundColor='#CCC'
        />
        <BarraNavegacao />

        <View style={styles.logo}>
	        <Image source={imagens.logo} />
	      </View>

	      <View style={styles.menu}>
		      <View style={styles.menuGrupo}>

		      	<TouchableHighlight
		      		onPress={()=>{
		      			this.props.navigator.push({ id: 'b'});
		      		}}
		      	>
		        	<Image style={styles.imgMenu} source={imagens.menu_cliente} />
		        </TouchableHighlight>	

		        <Image style={styles.imgMenu} source={imagens.menu_contato} />
	      	</View>
		      <View style={styles.menuGrupo}>
		        <Image style={styles.imgMenu} source={imagens.menu_empresa} />
		        <Image style={styles.imgMenu} source={imagens.menu_servico} />
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