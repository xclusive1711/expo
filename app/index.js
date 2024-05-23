import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router'
import { Redirect } from 'expo-router';

export default function Page() {
  return (
  //  <View>
  //   <Text>sjjsj</Text>
  //  </View>
    <Redirect href="/(drawer)/(tabs)/feed" />
  )
}