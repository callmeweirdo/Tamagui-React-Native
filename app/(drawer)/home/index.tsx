// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Card, Main } from 'tamagui';
import { Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getTrending } from '~/services/api';
import { ImageBackground } from 'react-native';

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
      />
    </Main>
  );
}