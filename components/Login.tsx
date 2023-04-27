import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as React from 'react'

export default function Login() {


  return (
    <View>
      <View>
        <Image
          source={require('../components/assets/office.png')}
          style={styles.logInImage}
        />
      </View>
      <View>
        <Text style={styles.wilcomeText}>Welcome</Text>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.userEmail}>
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

      <View style={styles.userEmail}>
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
      <Text style={styles.paswordForget}>Forget Password?</Text>
      <View>
        <TouchableOpacity
          onPress={() => 'Login'}
        >
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loginWit}>Or,login with...</Text>

      <View style={styles.loginOptionLogo}>
        <View style={styles.loginView}>
          <Image
            source={require('./assets/search.png')}
            style={styles.loginOption}
          />
        </View>

        <View style={styles.loginView}>
          <Image
            source={require('./assets/facebook.png')}
            style={styles.loginOption}
          />
        </View>

        <View style={styles.loginView}>
          <Image
            source={require('./assets/apple.png')}
            style={styles.loginOption}
          />
        </View>

        <View style={styles.loginView}>
          <Image
            source={require('./assets/twitter.png')}
            style={styles.loginOption}
          />
        </View>
      </View>

      <View style={styles.registerView}>
        <Text style={styles.registerViewApp}>New to the app?</Text>
        <TouchableOpacity
          onPress={() => 'Register open'}
        >
          <Text style={styles.registerViewOption}>Register</Text>
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
  wilcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00164d',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily:'Rubik'
  },
  loginText: {
    padding: 8,
    fontSize: 30,
    fontWeight: '500',
    color: '#555d71',
    paddingHorizontal: 12
  },
  userEmail: {
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
  inputEmail: {
    fontSize: 22,
    color: '#333',
    width: '85%',
    height: 45,
    borderRadius: 8
  },
  arroba: {
    height: 30,
    width: 30
  },
  paswordForget: {
    color: '#4153EF',
    fontSize: 18,
    paddingHorizontal: 12,
    fontWeight: '500'
  },
  loginBtn: {
    width: '70%',
    // height:25,
    padding: 10,
    margin: 5,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#00081d',
    color: '#fff',
    borderRadius: 5
  },
  loginWit: {
    color: '#676767',
    textAlign: 'center',
    padding: 8,
    fontSize: 15
  },
  loginOptionLogo: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 7,
  },
  loginOption: {
    height: 40,
    width: 40,
  },
  loginView: {
    padding: 7,
    borderColor: '#b3b3b3',
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 4,
    backgroundColor: '#f8f4f4'
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
    color: '#4153EF',
    fontSize: 16,
    fontWeight: '600'
  }

})