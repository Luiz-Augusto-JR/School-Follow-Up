import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function BoletimScreen(){
    return (
        <View style={styles.container}>
       <View style={styles.inicio}>
                <Text>BOLETIM<br></br>  </Text>
            </View>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '',
        alignItems: 'center',
        justifyContent: 'top',
    },
    inicio: {
        backgroundColor: 'blue',
        width: "100%",
        textAlign: 'center',
         
    }
});