import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ToastAndroid
} from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units'
import axios from 'axios'
import { API_URL } from '@env'
import { connect } from 'react-redux'
import { login } from './../../utils/redux/action/authAction'
import {useSelector} from 'react-redux'


const Login = ({ navigation, login }) => {
    const auth = useSelector((state) => state.authReducer);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [btnText, setBtnText] = useState('LOGIN')

    useEffect(() =>{
        if(auth.isLogin){
            navigation.replace('Home')
        }
    },[])

    const submitData = () => {
        setBtnText('Please wait')
        const data = {
            email: email,
            password: password
        }
        axios.post(API_URL + '/auth/login', data)
            .then(({ data }) => {
                ToastAndroid.show('Login Sukses.', ToastAndroid.SHORT, ToastAndroid.CENTER);
                login(data.content.id, data.content.email)
                navigation.replace('Home')
            }).catch(({ response }) => {
                if (response.status == 404) {
                    ToastAndroid.show('Email/password tidak ditemukan!', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
                console.log(response.data)
                setBtnText('LOGIN')
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
                        >Login to your existing account.</Text>
                    </View>
                    <View
                        style={{ marginTop: vw(2) }}
                    >
                        <Image
                            source={{ uri: 'https://kisikisi-root.nos.jkt-1.neo.id/assets/images/logo/ansena_grup_asia_pt_1607401107.jpeg' }}
                            style={{
                                width: vw(40),
                                height: vw(40)
                            }}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <KeyboardAvoidingView>
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
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={{
                                marginTop: vw(8),
                                width: vw(90),
                                backgroundColor: '#0d82ff',
                                borderRadius: 30
                            }}
                            onPress={
                                submitData
                            }
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
                        >Don't have an account, </Text>
                        <TouchableOpacity
                            onPress={
                                () => { navigation.navigate('Register') }
                            }
                        >
                            <Text
                                style={{
                                    color: '#338fb0',
                                    fontSize: 16
                                }}
                            >Register Here</Text>
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id, email) =>
            dispatch(login(id, email)),
    };
};
export default connect(null, mapDispatchToProps)(Login);