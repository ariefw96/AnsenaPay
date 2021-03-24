import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'
import { vw, vh } from 'react-native-expo-viewport-units'
import { useSelector, connect } from 'react-redux'
import { API_URL } from '@env'

const Profile = ({ navigation }) => {
    const auth = useSelector((state) => state.authReducer);
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        axios.get(API_URL + '/user/myProfile/' + auth.id)
            .then(({ data }) => {
                setProfile(data.data)
                setLoading(false)
            }).catch(({ response }) => {
                console.log(response.data)
            })
    }, [])

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
                            marginTop: vw(5),
                            marginBottom: vw(5)
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                alignSelf: 'center'
                            }}
                        >Welcome Back !</Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >{auth.email}</Text>
                    </View>
                    <View
                        style={{
                            width: vw(90),
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: vw(90),

                        }}
                    >
                        {
                            loading ? (
                                <ActivityIndicator size="large" color="blue" />
                            ) : (
                                    <>
                                        <View
                                            style={{ alignItems: 'center' }}
                                        >
                                            <Image
                                                source={{ uri: 'https://sttasm.ac.id/wp-content/uploads/2018/06/user-default.jpg' }}
                                                style={{
                                                    width: vw(50),
                                                    height: vw(50),
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{ marginTop: vw(5) }}
                                        >

                                            <Text
                                                style={styles.textProfile}
                                            >Email : {profile.email}</Text>
                                        </View>
                                        <Text
                                            style={styles.textProfile}
                                        >Nama : {profile.name}</Text>
                                        <Text
                                            style={styles.textProfile}
                                        >No. Hp : {profile.phone}</Text>
                                    </>
                                )
                        }
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => { navigation.navigate('Edit') }
                        }
                    >
                        <Text
                            style={styles.textMenu}
                        >Edit Profile</Text>

                    </TouchableOpacity>
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
        height: vh(70),
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopColor: '#ebeff5',
        borderTopWidth: 0.8,
        elevation: 10,
        alignItems: 'center'
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

export default Profile