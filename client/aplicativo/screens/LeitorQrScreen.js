import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { api } from "../services/api";

export function LeitorQrScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        const frequenciaId = JSON.parse(data).id;

        try {
            await api.post(`/frequencias/${frequenciaId}`);
            alert("Presença registrada!");
        } catch (err) {
            console.log(err);
        }       
    };

    if (hasPermission === null) {
        return <Text>Obtendo permissões</Text>;
    }
    if (hasPermission === false) {
        return <Text>Você precisa habilitar o acesso a câmera para conseguir escanear o QR</Text>;
    }

    return (
        <View style={styles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "grey"
    }
});