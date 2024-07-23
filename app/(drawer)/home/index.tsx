// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Card, Main, Input } from 'tamagui';
import { Container, Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getTrending } from '~/services/api';
import { ImageBackground } from 'react-native';
import { YStack } from 'tamagui';

export default function HomeScreen() {

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  return (
    <Main>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg` }}
        style={{ width: '100%', height: 200 }}
      >

        <Container>
          <YStack>
            <Title style={{ color: '#fff' }} enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation="bouncy">Trending</Title>
            <Input />
          </YStack>
        </Container>
      </ImageBackground>
    </Main>
  );
}