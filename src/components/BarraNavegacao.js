import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
  	if(this.props.voltar) {
	    return (
	    	<View style={ styles.barraTitulo }>
						<TouchableHighlight
		      		onPress={()=>{
		      			this.props.navigator.pop();
		      		}}
		      	>
	    				<Image source={imagens.btnVoltar} />
	    			</TouchableHighlight>
	    		<Text style={ styles.titulo }>ATM Consultoria</Text>
	    	</View>
	    );
	  }
	  return (
	    	<View style={ styles.barraTitulo }>
	    		<Text style={ styles.titulo }>ATM Consultoria</Text>
	    	</View>
	    );
  }
}

const imagens = {
	btnVoltar: require('../imgs/btn_voltar.png')
}

const styles = StyleSheet.create({
	barraTitulo: {
		backgroundColor: '#CCC',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	titulo: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000'
	}
});