import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ToastAndroid
} from 'react-native'
import axios from 'axios'
import { vw, vh } from 'react-native-expo-viewport-units'
import { useSelector, connect } from 'react-redux'
import { API_URL } from '@env'

const SendJob = ({ navigation, route }) => {
    const auth = useSelector((state) => state.authReducer);
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [textBtn, setTextBtn] = useState('Submit')

    console.log(route.params.id)
    console.log(auth.id, auth.name)

    const submitData = () => {
        setTextBtn('Please wait')
        const data = {
            sender: auth.id,
            receiver: route.params.id,
            sender_name: auth.name,
            job_title: title,
            job_message: message
        }

        axios.post(API_URL + '/job/add')
            .then(({ data }) => {
                ToastAndroid.show('Sukses mengirim pesan.', ToastAndroid.SHORT, ToastAndroid.CENTER);
                navigation.replace('ListUser')
            }).catch(({ response }) => {
                console.log(response.data)
            })
    }

    return (
        <>
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebeff5' }}>
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
                            marginTop: vw(5),
                            marginBottom: vw(5),
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                alignSelf: 'center'
                            }}
                        >Send Job to User</Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >Ansena Group</Text>
                    </View>
                    <View
                        style={{
                            marginHorizontal: vw(5)
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >Title</Text>
                        <TextInput
                            placeholder='Enter title of the Job'
                            style={{
                                width: vw(90),
                                borderWidth: 0.5,
                                marginBottom: vw(2),
                                paddingLeft: vw(4),
                            }}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >Message</Text>
                        <TextInput
                            editable
                            placeholder='Enter Message'
                            style={{
                                width: vw(90),
                                borderWidth: 0.5,
                                paddingLeft: vw(4),

                            }}
                            onChangeText={(text) => setMessage(text)}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                submitData
                            }
                        >
                            <Text
                                style={styles.textMenu}
                            >
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        minHeight: vh(70),
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopColor: '#ebeff5',
        borderTopWidth: 0.8,
        elevation: 10,
    },
    textMenu: {
        paddingVertical: vw(5),
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProfile: {
        marginBottom: vw(2),
        paddingLeft: vw(5),
        fontSize: 16,
        fontWeight: 'bold',
        width: vw(80)
    },
    textSubProfile: {
        marginBottom: vw(2),
        paddingLeft: vw(5),
        fontSize: 20,
        fontWeight: 'bold',
    },
    propImage: {
        height: vw(7),
        width: vw(8),
        marginRight: vw(2),
        alignSelf: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#0d82ff',
        borderRadius: 20,
        width: vw(90),
        marginVertical: vw(2),
        alignItems: 'center'
    }
})

export default SendJob