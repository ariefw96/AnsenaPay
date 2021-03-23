import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units'
import { useSelector, connect } from 'react-redux'
import { logout } from './../../utils/redux/action/authAction'
import { useSocket } from './../../utils/context/SocketProvider'
import PushNotification from 'react-native-push-notification'
import {showNotification} from './../../notification'
import { } from './../'


const Home = ({ navigation, logout }) => {
    const auth = useSelector((state) => state.authReducer);
    const socket = useSocket()
    const channel = 'notif'


    useEffect(() => {
        PushNotification.createChannel(
            {
                channelId: 'notif',
                channelName: 'My Notification channel',
                channelDescription: 'A channel to categories your notification',
                soundName: 'default',
                importance: 4,
                vibrate: true,
            },
            (created) => console.log(`create channel returned '${created}'`),
        );

        PushNotification.getChannels((channel_ids) => {
            console.log(channel_ids);
        });
    }, [])

    const pressNotif = () =>{
        showNotification('New Job Added', 'This is notification from React-Native', channel);
    }

    const promptLogout = () => {
        Alert.alert(
            "Logout?",
            "You'll be logout from system",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", onPress: Logout }
            ],
            { cancelable: true }
        );
    }

    const Logout = () => {
        logout()
        navigation.replace('Login')
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
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                () => { navigation.navigate('Profile') }
                            }
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={styles.textMenu}
                                >Profile</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' }}
                                    style={styles.propImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={styles.textMenu}
                                >Menu 1</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' }}
                                    style={styles.propImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={pressNotif}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={styles.textMenu}
                                >Menu 2</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' }}
                                    style={styles.propImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={styles.textMenu}
                                >Menu 3</Text>
                                <Image
                                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' }}
                                    style={styles.propImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={
                                    promptLogout
                                }
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text
                                        style={styles.textMenu}
                                    >Logout</Text>
                                    <Image
                                        source={{ uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' }}
                                        style={styles.propImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
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
        paddingLeft: vw(5),
        fontSize: 20,
        fontWeight: 'bold'
    },
    propImage: {
        height: vw(7),
        width: vw(8),
        marginRight: vw(2),
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#ebeff5',
        borderRadius: 20,
        width: vw(90),
        marginVertical: vw(2)
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () =>
            dispatch(logout()),
    };
};
export default connect(null, mapDispatchToProps)(Home);