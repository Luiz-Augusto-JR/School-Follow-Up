import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function FrequenciaScreen() {
    return(
        <View style={styles.container}>
        <View style={styles.notas}>
    <Button
          title="NOTAS"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Text> <br></br> </Text>
        </View>
        <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
container: {

}


});