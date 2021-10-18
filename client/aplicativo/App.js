import React from 'react';
 
import { AuthProvider } from './context/AuthContext';
import { Router } from './routes';



// import { AuthProvider } from './context/AuthContext';
// import { Router } from './routes';
//import { LoginScreen } from './screens/LoginScreen';
import { BoletimScreen } from './screens/BoletimScreen';

export default function App() {
  return (
    // <AuthProvider>
    //   <Router />
    // </AuthProvider>
    // <LoginScreen />
  < BoletimScreen />
 
  );
}


