import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { api } from '../services/api';


export function Td({ text, customStyle }) {
    return (
        <Text style={[styles.td, customStyle]}>{text}</Text>
    );
}

export function BoletimScreen() {
    const [boletim, setBoletim] = useState([
        {
            materia: "geografia",            
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "matemática",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        }, 
        {
            materia: "ingles",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "ed fisica",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "portugues",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "biologia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "filosofia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "artes",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "historia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "fisica",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            materia: "sociologia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        }
    ]);

    // useEffect(() => {
    //     async function getBoletim() {
    //         try {
    //             const boletim = (await api.get("/boletim")).data;
    //             setBoletim(boletim);
    //         } catch (error) {                
    //             console.log(error);
    //         }            
    //     }

    //     getBoletim();
    // }, []);

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
                {
                    boletim.map(materia => (
                        <View style={styles.linhaTabela}>
                            <Td customStyle={{ width: "30%" }} text={materia.materia} />
                            <Td text={materia.n1} />
                            <Td text={materia.n2} />
                            <Td text={materia.n3} />
                            <Td text={materia.n4} />
                            <Td text={materia.media} />
                        </View>
                    ))
                }
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
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Ed fisica" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Filosofia" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Artes" />
                    <Td text="APROVADO" />
                    <Td text="100%" />
                </View>
                <View style={styles.linhaTabela}>
                    <Td customStyle={{ width: "30%" }} text="Historia" />
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
