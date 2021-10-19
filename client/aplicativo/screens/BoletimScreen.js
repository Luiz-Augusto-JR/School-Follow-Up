import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';
import { api } from '../services/api';
import { Materia } from '../components/Materia';


export function Td({ text, customStyle }) {
    return (
        <Text style={[styles.td, customStyle]}>{text}</Text>
    );
}

export function BoletimScreen() {
    const [boletim, setBoletim] = useState([]);

    useEffect(() => {
        async function getBoletim() {
            try {
                const boletim = (await api.get("alunos/boletim")).data;
                console.log(boletim);
                setBoletim(boletim);
            } catch (error) {                
                console.log(error);
            }            
        }

        getBoletim();
    }, []);

    function renderMateria({ item }) {
        return (
            <Materia materia={item} />
        )
    }

    return (
        <View  style={styles.container}>
            <Text style={styles.header}>BOLETIM</Text>            
            <FlatList 
                data={boletim}
                renderItem={renderMateria}
                keyExtractor={(item, index) => ""+index}
                style={styles.materias}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,                      
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
    },
    materias: {
        padding: 10
    }
});
