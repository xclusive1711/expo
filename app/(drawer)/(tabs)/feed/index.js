import { Image, View, Text, Button } from 'react-native'
import React from 'react'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Feed Pa</Text>
      <Image source={require('C:\Users\admin\Desktop\assets\images\logo.png')} style={{width: 400, height: 400}} />
    </View>
  )
}