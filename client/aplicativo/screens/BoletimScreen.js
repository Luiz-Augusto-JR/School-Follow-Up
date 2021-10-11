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

export function BoletimScreen() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>BOLETIM</Text>

            <View style={styles.tabela}>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Matérias" />
                    <Td text="1º BI" />
                    <Td text="2º BI" />
                    <Td text="3º BI" />
                    <Td text="4º BI" />
                    <Td text="Média Final" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Geografia" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Matemática" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Portugues" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Fisica" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Biologia" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Sociologia" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Ingles" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                    <Td text="10" />
                </View>
            </View>

            <Text style={styles.titulo}>Frequência</Text>

            <View style={styles.tabela}>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Matérias" />
                    <Td text="Resultado" />
                    <Td text="Frequência" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Geografia" />
                    <Td text="APROVADO" />
                    <Td text="100%" />

                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Matemática" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Portugues" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Fisica" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Biologia" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Sociologia" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Ingles" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
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
});
