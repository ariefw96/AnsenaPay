import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    LoginScreen,
    ProfileScreen,
    RegisterScreen,
    EditScreen
} from '../screen';


const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                initialRouteName="Login"
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Edit"
                component={EditScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
