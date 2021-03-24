import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units'
import axios from 'axios'
import { API_URL } from '@env'


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [btnText, setBtnText] = useState('Register')

    const submitData = () => {
        setBtnText('Please Wait')
        const data = {
            email: email,
            password: password
        }

        axios.post(API_URL + '/auth/signup', data)
            .then(({ data }) => {
                ToastAndroid.show('Sukses Register', ToastAndroid.SHORT, ToastAndroid.CENTER);
                navigation.navigate('Login')
            }).catch(({ response }) => {
                if (response.status == 401) {
                    setEmail('')
                    setBtnText('Register')
                    ToastAndroid.show('Email telah digunakan!', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
                console.log(response.data)
            })
    }

    return (
        <>
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebeff5' }}>
                <View
                    style={styles.headContent}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 32
                        }}
                    >ANSENA GROUP</Text>
                </View>
                <View
                    style={styles.content}
                >
                    <View
                        style={{
                            marginTop: vw(5)
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: 'gray'
                            }}
                        >Register New Account.</Text>
                    </View>
                    <View
                        style={{
                            marginTop: vw(5)
                        }}
                    >
                        <Image
                            source={{ uri: 'https://kisikisi-root.nos.jkt-1.neo.id/assets/images/logo/ansena_grup_asia_pt_1607401107.jpeg' }}
                            style={{
                                width: vw(40),
                                height: vw(40)
                            }}
                        />
                    </View>
                    <KeyboardAvoidingView>
                        <View
                            style={{
                                marginTop: 20
                            }}
                        >
                            <TextInput
                                style={{
                                    width: vw(90),
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 0.5
                                }}
                                placeholder="Enter email"
                                onChangeText={(text) => { setEmail(text) }}
                            />
                            <TextInput
                                style={{
                                    width: vw(90),
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 0.5
                                }}
                                secureTextEntry={true}
                                placeholder="Enter Password"
                                onChangeText={(text) => { setPassword(text) }}
                            />
                            <TouchableOpacity
                                style={{
                                    marginTop: vw(8),
                                    width: vw(90),
                                    backgroundColor: '#0d82ff',
                                    borderRadius: 30
                                }}
                                onPress={submitData}
                            >
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        paddingVertical: vh(2),
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                    }}
                                >{btnText}</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16
                            }}
                        >Already have an account, </Text>
                        <TouchableOpacity
                            onPress={
                                () => { navigation.navigate('Login') }
                            }
                        >
                            <Text
                                style={{
                                    color: '#338fb0',
                                    fontSize: 16
                                }}
                            >Login Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    headContent: {
        height: vh(30),
        backgroundColor: '#ebeff5',
        justifyContent: 'center',
        alignContent: 'center'
    },
    content: {
        height: vh(69),
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopColor: '#ebeff5',
        borderTopWidth: 0.8,
        elevation: 10,
        alignItems: 'center'
    }
})

export default Register