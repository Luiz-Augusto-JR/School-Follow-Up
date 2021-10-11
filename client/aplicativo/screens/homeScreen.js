import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import logo from "../assets/logo.png"

export function HomeScreen() {
    return (
        <View style={styles.container}>                        
            <View style={styles.email}>
                <Image source={logo} />
                <Button
                    title="EMAIL"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Text> <br></br> </Text>
                <View style={styles.senha}>

                    <Button
                        title="SENHA"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                    <Text> <br></br> </Text>
                    <View style={styles.login}>

                        <Button
                            title="LOGIN"
                            onPress={() => Alert.alert('Simple Button pressed')}

                        />
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


    }, stretch: {
        width: 250,
        height: 250,
        resizeMode: 'stretch',
    },
    email: {

    },
    senha: {

    },
    login: {

    }
});