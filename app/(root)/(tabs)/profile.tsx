import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'

const profile = () => {
  const handleLogout = async() => {}

  return (
    <SafeAreaView className ="h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className = "flex flex-row items-center justify-between mt-5">
          <Text className = "text-xl font-rubik-bold">Profile</Text>
          <Image className = "size-5" source = {icons.bell}/>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default profile