import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    LoginScreen,
    ProfileScreen,
    RegisterScreen,
    EditScreen,
    SplashScreen
} from '../screen';

import { SocketProvider } from './../utils/context/SocketProvider'

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
    const user_id = useSelector((state) => state.authReducer.id);
    return (
        <SocketProvider id={user_id}>
            <Stack.Navigator>
                <Stack.Screen
                    initialRouteName="Splash"
                    name="Spash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
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
        </SocketProvider>
    );
};

export default Navigation;
