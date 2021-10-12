import React from 'react';
import { StyleSheet, Text, View, Button, Image, } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export function PerfilScreen() {
    return (

        <View style={styles.container}>
            <View style={styles.perfil}>
            <Text>PERFIL</Text>
                <EvilIcons name="user" size={200} color="black" />
                <Text>BEM VINDO %ALUNO%</Text>
            </View>

            <View style={styles.nav}>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    perfil: {
        alignItems: 'center'
    },
    nav: {

    }
});