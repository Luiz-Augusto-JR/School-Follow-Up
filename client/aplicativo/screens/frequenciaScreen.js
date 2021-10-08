
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export function FrequenciaScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.notas}>
                <Text> NOTAS E FREQUÊNCIAS<br></br>  </Text>
            </View>
            <View style={styles.botao}>
                <Text> <br /> </Text>
                <Button
                    title="NOTAS"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Text> <br /> </Text>
            </View>
            <Text> adicinar a tabela </Text>

            <View style={styles.frequencia}>
                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>
                <Button
                    title="FREQUÊNCIA"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>
                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>

                <Text> <br /> </Text>
                <Text> <br /> </Text>


            </View>

            <View style={styles.final}>

                <Image
                    style={styles.perfil}
                    source={require('../assets/perfil.png')}
                />
            </View>
            <View style={styles.notasfrequencia}>
                <Image
                    style={styles.notasefrequencias}
                    source={require('../assets/notas.png')}
                />

            </View>
   <View style={styles.qr}>
   <Image
                    style={styles.qrcode}
                    source={require('../assets/qrcode.png')}
                />
   </View>
   <View style={styles.boleto}>
   <Image
        style={styles.boletim}
        source={require('../assets/boletim.png')}
                />
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
    notas: {
        backgroundColor: 'blue',
        width: "100%",
        textAlign: 'center',

    },
    botao: {
        width: "30%"
    },
    frequencia: {
        width: "30%"
    },
    final: {
        backgroundColor: 'grey',
        width: "100%",
        justifyContent: ''

    },
    perfil: {
        width: 25,
        height: 25,
        width: "10%"
    },
    notasefrequencias: {
        width: 25,
        height: 25,
        alignItems: 'stretch'

    },
    qrcode: {
       
    }
});

//os icones estao adicionados, só alinhar as posiçoes
