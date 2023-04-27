import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <View style={styles.App}>
      {
        <Login /> ? <Login /> : <Register />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  App:{
    flex:1,
    backgroundColor:'#FFF',
  }
})