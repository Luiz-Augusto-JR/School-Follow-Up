import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FrequenciaScreen } from '../screens/frequenciaScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Frequencia" 
        component={FrequenciaScreen} 
        options={{
            tabBarIcon: ({ focused, color }) => <FontAwesome5 name="user" size={24} color={color} />
        }} />          
        <Tab.Screen 
        name="Nota" 
        component={FrequenciaScreen} 
        options={{
            tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="clipboard-list-outline" size={24} color="white" />
        }} />          
         <Tab.Screen 
        name="Qrcode" 
        component={FrequenciaScreen} 
        options={{
            tabBarIcon: ({ focused, color }) =><MaterialCommunityIcons name="qrcode" size={24} color="white" />
        }} />        
         <Tab.Screen 
        name="Boletim" 
        component={FrequenciaScreen} 
        options={{
            tabBarIcon: ({ focused, color }) =><FontAwesome name="list-alt" size={24} color="white" />
        }} />        
    </Tab.Navigator>
  );
}