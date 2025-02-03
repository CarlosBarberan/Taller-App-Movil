import React from 'react'
import { Text, View } from 'react-native'

export const ScreenHome = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 50,
          textAlign: 'center'
        }}>
          Hola Mundo
        </Text>
      </View>
  )
}
