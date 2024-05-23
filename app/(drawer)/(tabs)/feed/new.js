import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Add New Post Page now</Text>
      <Text style={{fontSize:21}}>time to work now</Text>
      <Button onPress={() => router.back()} title='Go Back' />
    </View>
  )
}