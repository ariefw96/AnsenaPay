import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
import {useSelector} from 'react-redux'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 1500);
    }, [navigation]);
    return (
        <View style={styles.background}>
            {/* <Image source={LogoSplash} /> */}
            {/* <Text style={{fontSize: 30, color: 'white', fontWeight:'bold'}}>COVID-19</Text>
      <Text style={{fontSize: 30, color: 'white'}}>DATA CENTER</Text> */}
            <Image
                source={require('./../../assets/logo.jpeg')}
                style={{ width: vw(30), height: vw(30) }}
            />
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
