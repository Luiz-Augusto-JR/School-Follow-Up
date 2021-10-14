import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';


export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  const { authActions } = useAuth();

  async function handleSignIn() {
    try {
      await authActions.signIn(email, senha);
    } catch (error) {
      alert("Não foi possível fazer o login");
    }
  }

  return (
    <View style={styles.container}>
        <Image
         style={styles.stretch}
         source={require('../assets/logo.png')}
      />
      <Text></Text>
      <View style={styles.email}>
       
      <TextInput
        style={styles.input}
        title="EMAIL"
        placeholder="Digite o e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Text>  </Text>
        <View style={styles.senha}>
          
      <TextInput
        style={styles.input}
        title="SENHA"
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      </View>

         <Text> </Text> 
       <View style={styles.login}>
        
        <Button
          title="LOGIN"
          onPress={handleSignIn}
        />
       </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#008AFF',
    alignItems: 'center',
    justifyContent: 'center',
    

  },stretch: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 20
  },
  email:{
    width: "50%",
   
  },
  senha:{
    
  },
  login:{

  },
  input: {
    backgroundColor: "white"
  }
});

