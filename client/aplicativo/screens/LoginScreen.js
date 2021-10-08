import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export function LoginScreen() {
  return (
    <View style={styles.container}>
        <Image
         style={styles.stretch}
         source={require('../assets/logo.png')}
      />
      <Text></Text>
      <View style={styles.email}>
       
      <Button
        title="EMAIL"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text> <br></br> </Text>
        <View style={styles.senha}>
          
         <Button
        title="SENHA"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
         <Text> <br></br> </Text> 
       <View style={styles.login}>
        
         <Button
        title="LOGIN"
        onPress={() => Alert.alert('Simple Button pressed')}
      
      />
       </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    

  },stretch: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
  email:{
    width: "50%"
  },
  senha:{

  },
  login:{

  }
});

