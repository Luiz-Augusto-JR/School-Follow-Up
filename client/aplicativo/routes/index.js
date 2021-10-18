import React from "react";
import { useAuth } from "../context/AuthContext";
import { AppRoutes } from "./AppRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";
import { UserProvider } from "../context/UserContext";

export function Router() {
    const { accessToken } = useAuth();
    return (
        <NavigationContainer>
            {
                accessToken ?
                <UserProvider>
                    <AppRoutes />
                </UserProvider> :
                <LoginScreen />
            }
        </NavigationContainer>
    );
}