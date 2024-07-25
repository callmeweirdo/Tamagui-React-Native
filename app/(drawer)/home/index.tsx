// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Card, Main, Input, Spinner, YStack, useTheme, ScrollView, XStack } from 'tamagui';
import { Container, Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from '~/services/api';
import { ImageBackground } from 'react-native';
import useDebounce from '~/utils/useDebounce';
import MovieCard from '~/components/MovieCard';

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
        source={{ uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg' }}
        style={{ width: '100%', height: 200 }}
      >
        <Container>
          <YStack>
            <Title
              style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              enterStyle={{ opacity: 0, scale: 1.5, y: -10 }}
              animation="bouncy"
            >
              Trending
            </Title>
            <Input
              placeholder="Search for a movie, tv show, person..."
              borderWidth={1}
              size="$3"
              value={searchResult}
              onChangeText={(text) => setSearchResult(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle p={10} animation="lazy">
        {searchQuery.data?.results ? 'Search Result' : 'Trending'}
      </Subtitle>

      {(trendingQuery.isLoading || searchQuery.isLoading) && <Spinner py={14} color="$background" size="large" />}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} py={20} contentContainerStyle={{ gap: 10, paddingLeft: 10 }}>
        {searchQuery.data?.results
          ? searchQuery.data?.results.map((item) => <MovieCard key={item.id} movie={item} />)
          : trendingQuery.data?.results && trendingQuery.data.results.map((item) => <MovieCard key={item.id} movie={item} />)}
      </ScrollView>
    </Main>
  );
}
