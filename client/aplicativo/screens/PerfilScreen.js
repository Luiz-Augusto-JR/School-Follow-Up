import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export function PerfilScreen() {
    return (

        <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('icons8-user-24(1).png')}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://icons8.com/icons/set/user'}}
        />
        <Image



        <View style={styles.container}>                        
            <View style={styles.perfil}>


                <Text>PERFIL</Text>
                <view style={styles.perfil}>
                   
                    <Text> <br>BEM VINDO %ALUNO%</br> </Text>
                    <View style={styles.perfil}>

                       
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',


});
