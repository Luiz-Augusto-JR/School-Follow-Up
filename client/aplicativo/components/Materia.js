import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from "react-native";
import { DataTable } from "react-native-paper";

export function Materia({ materia }) {
    const [opened, setOpened] = useState(false);

    function renderBimestre({ item, index }) {    
        return (
            <View key={"" + index} style={styles.bimestreView}>
                <Text style={styles.bimestreTitle}>Bimestre 0{index + 1}</Text>
                <DataTable.Header>
                    <DataTable.Title numeric>Nota 01</DataTable.Title>
                    <DataTable.Title numeric>Nota 02</DataTable.Title>
                    <DataTable.Title numeric>Nota 03</DataTable.Title>
                    <DataTable.Title numeric>Nota 04</DataTable.Title>
                    <DataTable.Title numeric>Média</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell numeric>{item.n1?.toFixed(2)}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.n2?.toFixed(2)}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.n3?.toFixed(2)}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.n4?.toFixed(2)}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.media?.toFixed(2)}</DataTable.Cell>
                </DataTable.Row>                
            </View>
        );
    }

    return (
        <View style={styles.containerMateria}>
            <TouchableOpacity style={[styles.materia, opened && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]} onPress={() => setOpened(state => !state)}>
                <Text style={styles.materiaNome}>{materia.nome}</Text>
            </TouchableOpacity>
            <DataTable style={styles.tabela}>
                {
                
                    opened &&
                    <>
                        <FlatList 
                            data={materia.bimestres}
                            renderItem={renderBimestre}
                            keyExtractor={(item, index) => ""+index}
                        />            
                        <View style={styles.containerFrequencia}>
                            <Text>Frequência</Text>
                            <Text>{materia.frequencia}%</Text>
                        </View>
                    </>
                }

            </DataTable>

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
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    bimestreTitle: {
        textAlign: "center",
        borderColor: "#555",        
        borderBottomWidth: 1
    },
    bimestreView: {
        paddingTop: 2,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10
    },
    containerFrequencia: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    }
});
