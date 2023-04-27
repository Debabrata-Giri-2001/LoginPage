import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Register() {
    return (
        <View>
            <View>
                <Image
                    source={require('../components/assets/monstera.png')}
                    style={styles.logInImage}
                />
            </View>
            <View>
                <Text style={styles.loginText}>Create an account</Text>
            </View>

            <View style={styles.inputField}>
                <Image
                    source={require('../components/assets/user.png')}
                    style={styles.arroba}
                />
                <TextInput
                    placeholder='Full Name'
                    placeholderTextColor={'#888'}
                    style={styles.inputEmail}
                />
            </View>
            <View style={styles.inputField}>
                <Image
                    source={require('../components/assets/arroba.png')}
                    style={styles.arroba}
                />
                <TextInput
                    placeholder='Email ID'
                    placeholderTextColor={'#888'}
                    style={styles.inputEmail}
                />
            </View>
            <View style={styles.inputField}>
                <Image
                    source={require('../components/assets/padlock.png')}
                    style={styles.arroba}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor={'#888'}
                    style={styles.inputEmail}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.inputField}>
                <Image
                    source={require('../components/assets/padlock.png')}
                    style={styles.arroba}
                />
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor={'#888'}
                    style={styles.inputEmail}
                    secureTextEntry={true}
                />
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => 'Login'}
                >
                    <Text style={styles.CreateAcBtn}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerView}>
                <Text style={styles.registerViewApp}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => 'Register'}
                >
                    <Text style={styles.registerViewOption}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logInImage: {
        height: 320,
        width: 320,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    loginText: {
        padding: 8,
        fontSize: 30,
        fontWeight: '700',
        color: '#292929',
        paddingHorizontal: 12
    },
    inputField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
        justifyContent: 'space-around',
        borderColor: '#808080',
        borderWidth: 2,
        margin: 8,
        borderRadius: 8,

    },
    arroba: {
        height: 30,
        width: 30
    },
    inputEmail: {
        fontSize: 22,
        color: '#333',
        width: '85%',
        height: 45,
        borderRadius: 8
    },
    CreateAcBtn: {
        width: '70%',
        // height:25,
        padding: 10,
        margin: 5,
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        backgroundColor: '#00081d',
        color: '#fff',
        borderRadius: 5
    },
    registerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
        
      },
      registerViewApp: {
        color: '#333',
        fontSize: 16,
        
      },
      registerViewOption: {
        color: '#000e90',
        fontSize: 16,
        fontWeight: '800'
      }
})