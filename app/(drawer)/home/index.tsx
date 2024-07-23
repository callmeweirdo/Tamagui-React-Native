// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Card } from 'tamagui';
import { Subtitle, Title } from '~/tamagui.config';

export default function HomeScreen() {
  return (
    <View>
      <Subtitle>Home Movies</Subtitle>
      <Link href={'/(drawer)/home/movie/[id]'} asChild>
        <Text>go to movie</Text>
      </Link>
      <Card>
        <Card.Header />
        <Card.Footer />
        {/* any other components */}
        <Card.Background />
      </Card>
    </View>
  );
}