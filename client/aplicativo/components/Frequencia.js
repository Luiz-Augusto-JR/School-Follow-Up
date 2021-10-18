import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";

export function Frequencia({ frequencia }) {
    const [opened, setOpened] = useState(false);

    return (
        <View style={styles.containerFrequencia}>
            <TouchableOpacity style={[styles.frequencia, opened && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]} onPress={() => setOpened(state => !state)}>
                <Text style={styles.frequenciaNome}>{frequencia.nome}</Text>
            </TouchableOpacity>
            {
                opened &&
                <DataTable style={styles.tabela}>
                    <DataTable.Header>
                        <DataTable.Title numeric>Matérias</DataTable.Title>
                        <DataTable.Title numeric>Frequencia</DataTable.Title>
                        <DataTable.Title numeric>Resultado Final</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell numeric>{materia.n1.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.n2.toFixed(2)}</DataTable.Cell>
                        <DataTable.Cell numeric>{materia.n3.toFixed(2)}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    containerFrequencia: {
        marginBottom: 20
    },
    frequencia: {
        backgroundColor: "#249adf",
        padding: 20,
        borderRadius: 4,
    },
    frequenciaNome: {
        color: "white"
    },
    tabela: {
        backgroundColor: "grey",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
});
