import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";

export function Materia({ materia }) {
    const [opened, setOpened] = useState(false);

    return (
        <View style={styles.containerMateria}>
            <TouchableOpacity style={[styles.materia, opened && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]} onPress={() => setOpened(state => !state)}>
                <Text style={styles.materiaNome}>{materia.nome}</Text>
            </TouchableOpacity>
            {
                opened &&
                <DataTable style={styles.tabela}>
                    <DataTable.Header>
                        <DataTable.Title numeric>Nota 01</DataTable.Title>
                        <DataTable.Title numeric>Nota 02</DataTable.Title>
                        <DataTable.Title numeric>Nota 03</DataTable.Title>
                        <DataTable.Title numeric>Nota 04</DataTable.Title>
                        <DataTable.Title numeric>Média</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell numeric>{materia.n1.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.n2.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.n3.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.n4.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.media.toFixed(2)}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    containerMateria: {
        marginBottom: 20
    }, 
    materia: {
        backgroundColor: "#249adf",
        padding: 20,
        borderRadius: 4,        
    },
    materiaNome: {
        color: "white"
    },
    tabela: {
        backgroundColor: "grey",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
});
