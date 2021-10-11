import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Td({ text, customStyle }) {
    return (
        <Text style={[styles.td, customStyle]}>{text}</Text>
    );
}


export function FrequenciaScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Notas e frequências</Text>
                <Text style={styles.titulo}>Notas</Text>            

                <View style={styles.tabela}>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Selecione a matéria"/>
                        <Td text="Nota 01"/>
                        <Td text="Nota 02"/>
                        <Td text="Nota 03" />
                        <Td text="Nota 04" />                    
                        <Td text="Média" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Geografia"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Matemática"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />                    
                        <Td text="10" />
                    </View>
                </View>

                <Text style={styles.titulo}>Frequência</Text>

                <View style={styles.tabela}>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Selecione a matéria"/>
                        <Td text="Matéria"/>
                        <Td text="Aulas totais"/>
                        <Td text="Faltas" />
                        <Td text="Frequência" />                                            
                    </View>
                    <View style={styles.linhaTabela}>
                        <Td customStyle={{ width: "30%" }} text="Geografia"/>
                        <Td text="10"/>
                        <Td text="10"/>
                        <Td text="10" />
                        <Td text="10" />    
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",        
    },
    header: {
        fontSize: 20,
        textTransform: "uppercase",
        backgroundColor: "#159cff",
        textAlign: "center",
        marginBottom: 5,
        width: "100%",
        color: "white",
        padding: 10
    }, 
    titulo: {
        backgroundColor: "#49bbec",
        width: 130,
        color: "white",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 18
    },
    tabela: {
        margin: 20
    },
    linhaTabela: {
        flexDirection: "row",        
    },
    td: {                
        borderWidth: 1,          
        textAlign: "center",
        width: "16%",
        padding: 5        
    },
    notas: {
        backgroundColor: 'blue',
        width: "100%",
        width: 100
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


    },
    perfil: {
        width: 25,
        height: 25,
        width: "10%"
    },
    notasefrequencias: {
        width: 25,
        height: 25,


    },
    qrcode: {
        width: 25,
        height: 25,

        justifyContent: "space-between",
    },
    boletim: {
        width: 25,
        height: 25

    }
});


