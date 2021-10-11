import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { FrequenciaScreen } from './screens/FrequenciaScreen';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from './screens/HomeScreen';
import { PerfilScreen } from './screens/PerfilScreen';
import { LoginScreen } from './screens/loginScreen';
import { BoletimScreen } from './screens/boletimScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}


