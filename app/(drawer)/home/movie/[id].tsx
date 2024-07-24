import { View, Text } from 'react-native'
import React from 'react';
import { useLocalSearchParams } from 'expo-router';


const Page = () => {
    const movie = useLocalSearchParams<{ id: string }>();
    console.log("id", movie);
  return (
    <View>
          <Text>{ movie.id}</Text>
    </View>
  )
}

export default Page;