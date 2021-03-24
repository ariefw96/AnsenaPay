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

const ListUser = ({ navigation }) => {
    const auth = useSelector((state) => state.authReducer);
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(API_URL + '/user/list/' + auth.id)
            .then(({ data }) => {
                setList(data.data)
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
                        >List User</Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >Ansena Group</Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        {
                            list.length > 0 ?
                                (
                                    <>
                                        {
                                            list.map(({ id, email, name, phone }) => {
                                                return (
                                                    <>
                                                        <TouchableOpacity
                                                            style={{
                                                                flexDirection: 'row',
                                                                padding: 0.1,
                                                                borderWidth: 0.5,
                                                                borderColor: 'gray',
                                                                width: vw(95),
                                                                borderRadius: 20,
                                                                marginBottom: 20
                                                            }}
                                                            onPress={
                                                                () => {
                                                                    navigation.navigate('SendJob', {
                                                                        id: id
                                                                    })
                                                                }
                                                            }
                                                        >
                                                            <Image
                                                                source={{ uri: 'https://sttasm.ac.id/wp-content/uploads/2018/06/user-default.jpg' }}
                                                                style={{
                                                                    width: vw(30),
                                                                    height: vw(30),
                                                                    borderTopLeftRadius: 20,
                                                                    borderBottomLeftRadius: 20,

                                                                }}
                                                            />
                                                            <View
                                                                style={{
                                                                    width: 0.5,
                                                                    backgroundColor: 'gray'
                                                                }}
                                                            >

                                                            </View>
                                                            <View
                                                                style={{
                                                                    marginTop: vw(2),
                                                                    marginLeft: vw(2)
                                                                }}
                                                            >
                                                                <Text
                                                                    numberOfLines={1}
                                                                    style={{
                                                                        paddingVertical: 2,
                                                                        fontSize: 16,
                                                                        width: vw(60)
                                                                    }}
                                                                >{email}</Text>
                                                                <Text
                                                                    style={{
                                                                        paddingVertical: 2,
                                                                        fontSize: 16,
                                                                        width: vw(60)
                                                                    }}
                                                                >Name : {name}</Text>
                                                                <Text
                                                                    style={{
                                                                        paddingVertical: 2,
                                                                        fontSize: 16,
                                                                        width: vw(60)
                                                                    }}
                                                                >Phone : {phone}</Text>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                ) : (
                                    <ActivityIndicator size="large" color="blue" />
                                )
                        }
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

export default ListUser