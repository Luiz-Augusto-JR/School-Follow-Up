import React from "react";
import { useAuth } from "../context/AuthContext";
import { AppRoutes } from "./AppRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";

export function Router() {
    const { accessToken } = useAuth();
    console.log(accessToken);
    return (
        <NavigationContainer>
            {
                accessToken ?
                <AppRoutes /> :
                <LoginScreen />
            }
        </NavigationContainer>
    );
}