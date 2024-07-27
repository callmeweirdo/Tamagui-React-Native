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
import { useMMKVObject } from 'react-native-mmkv';
import { Favorite } from '~/interfaces/moviesinterfaces';

export default function HomeScreen() {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  const theme = useTheme();


  return (
    <View>
      <Container>
        <ScrollView>
          {
            favorites?.map((fav) => (
              <Link href={`/(drawer)/favorites/${fav.mediaType}/${fav.id}`} asChild>
                <Text>{ fav.name}</Text>
              </Link>
            ))
          }
        </ScrollView>
      </Container>
    </View>
  );
}
