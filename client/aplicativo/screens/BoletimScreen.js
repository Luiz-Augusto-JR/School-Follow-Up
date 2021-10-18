import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { api } from '../services/api';
import { DataTable } from 'react-native-paper';
import { Materia } from '../components/Materia';
import { Frequencia } from '../components/Frequencia';


export function Td({ text, customStyle }) {
    return (
        <Text style={[styles.td, customStyle]}>{text}</Text>
    );
}

export function BoletimScreen() {
    const [boletim, setBoletim, frequencia] = useState([
        {
            nome: "geografia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "matemática",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        }, 
        {
            nome: "inglês", 
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "ed física",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "português",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "biologia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "filosofia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "artes",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "história",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "física",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        },
        {
            nome: "sociologia",
            n1: 10,
            n2: 10,
            n3: 10,
            n4: 10,
            media: 10
        }
    ]);

    /*export function BoletimScreen() {
        const [frequencia, setFrequencia] = useState([
            {
                nome: "geografia",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "matemática",
                n1: 10,
                n2: 10,
                n3: 10
            }, 
            {
                nome: "inglês", 
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "ed física",
                n1: 10,
                n2: 10,
                n3: 10 
            },
            {
                nome: "português",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "biologia",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "filosofia",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "artes",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "história",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "física",
                n1: 10,
                n2: 10,
                n3: 10
            },
            {
                nome: "sociologia",
                n1: 10,
                n2: 10,
                n3: 10
            }
        ]);*/

       /* function renderFrequencia({ item }) {
            return (
                <Frequencia frequencia={item} />
            )
        }
        return (
            <ScrollView>
                <Text style={styles.header}>FREQUENCIA</Text>
                <View style={styles.container}>                
                    <FlatList 
                        data={frequencia}
                        renderItem={renderFrequencia}
             
             />
             
             </View>
            </ScrollView>
            */


    function renderMateria({ item }) {
        return (
            <Materia materia={item} />
        )
    }
    return (
        <ScrollView>
            <Text style={styles.header}>BOLETIM</Text>
            <View style={styles.container}>                
                <FlatList 
                    data={boletim}
                    renderItem={renderMateria}
         
         />

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
           
            
              </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20        
    },
    header: {
        fontSize: 20,
        textTransform: "uppercase",
        backgroundColor: "#159cff",
        textAlign: "center",
        marginBottom: 5,
        width: "100%",
        color: "white",
        paddingTop: 30
    }
});
