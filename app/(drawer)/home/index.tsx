// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Card, Main, Input, Spinner, YStack, useTheme, ScrollView } from 'tamagui';
import { Container, Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from '~/services/api';
import { ImageBackground } from 'react-native';
import useDebounce from '~/utils/useDebounce';

export default function HomeScreen() {
  const [searchResult, setSearchResult] = useState('');
  const debouncedString = useDebounce(searchResult, 300);

  const theme = useTheme();


  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  const searchQuery = useQuery({
    queryKey: ['search'],
    queryFn: () => getSearchResults(debouncedString),
    enabled: debouncedString.length > 0,
  });

  return (
    <Main>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg` }}
        style={{ width: '100%', height: 200 }}
      >

        <Container>
          <YStack>
            <Title style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }} enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation="bouncy">Trending</Title>
            <Input
              placeholder='Search for a movie, tv show, person...'
              borderWidth={1}
              size={'$3'}
              value={searchResult}
              onChangeText={(text) => setSearchResult(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle p={10}>Trending</Subtitle>

      {(!trendingQuery.isLoading || searchQuery.isLoading) && <Spinner py={14} color={'$background'} size='large' /> }

      <ScrollView>
        <YStack p={15} >
          <Text>Movies...</Text>
        </YStack>
      </ScrollView>

    </Main>
  );
}