import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Router } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}


