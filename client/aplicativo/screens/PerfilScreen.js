import React from 'react';
import { StyleSheet, Text, View, Button, Image, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useUser } from '../context/UserContext';

export function PerfilScreen() {
	const { currentUser } = useUser();

	return (
		<View style={styles.container}>
			<View style={styles.perfilIcon}>
				<FontAwesome5 name="user-graduate" size={150} color="#249adf" />
			</View>
			<Text style={styles.perfilText}>BEM VINDO {currentUser.nome}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',		
		justifyContent: "center",
		alignItems: "center"
	},
	perfil: {
		alignItems: 'center'
	},
	perfilIcon: {
		height: 225,
		width: 225,
		borderWidth: 4,
		borderColor: "#249adf",
		borderRadius: 125,
		justifyContent: "center",
		alignItems: "center"
	},
	perfilText: { 
		marginTop: 20,
		fontSize: 30,
		textTransform: 'uppercase'
	}
});

