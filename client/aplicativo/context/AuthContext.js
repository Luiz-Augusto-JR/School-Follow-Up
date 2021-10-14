import React, { useEffect, useState } from "react"
import * as SecureStore from 'expo-secure-store';
import { api } from "../services/api";

const AuthContext = React.createContext("");

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        (async () => {
            const accessToken = await SecureStore.getItemAsync("access-token");

            if (accessToken) {
                api.defaults.headers.Authorization = `Bearer ${accessToken}`;
                setAccessToken(accessToken);
            }
        })();
    }, []);

    const authActions = {
        signIn: async (email, senha) => {
            try {
                const accessToken = (await api.post("/auth/login-aluno", { email, senha })).data;     
                api.defaults.headers.Authorization = `Bearer ${accessToken}`;      
                await SecureStore.setItemAsync("access-token", accessToken);
                setAccessToken(accessToken);
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        signOut: () => {
            api.defaults.headers.Authorization = "";
            SecureStore.deleteItemAsync("access-token");
            setAccessToken(null);
        }
    };

    return (
        <AuthContext.Provider value={{ authActions, accessToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);