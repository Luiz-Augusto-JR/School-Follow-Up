import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';


export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { authActions } = useAuth();

  async function handleSignIn() {
    setIsLoading(true);
    try {
      await authActions.signIn(email, senha);
    } catch (error) {
      alert("Não foi possível fazer o login");
      setIsLoading(false);
    }    
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.containerInputs}>

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

        <TouchableOpacity 
          style={[styles.button, isLoading && { backgroundColor: "#4e6470" }]} 
          onPress={handleSignIn}
          disabled={isLoading}
        >          
          { isLoading ?
            <ActivityIndicator size="small" color="white" /> :
            <MaterialIcons name="login" size={24} color="white" />
          }
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1991d2',    
    justifyContent: 'center',
    padding: 50
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    color: 'black',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: "#fff",
    fontSize: 20,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 10,
    padding: 5
  },
  button: {
    marginTop: 40,
    backgroundColor: "#185070",
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    marginLeft: 20,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
  }
});

