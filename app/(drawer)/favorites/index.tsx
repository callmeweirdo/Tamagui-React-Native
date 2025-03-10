// app/(drawer)/home/index.tsx
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Card, Main, Input, Spinner, YStack, useTheme, ScrollView, XStack, ListItem, Image } from 'tamagui';
import { Container, Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from '~/services/api';
import { ImageBackground } from 'react-native';
import useDebounce from '~/utils/useDebounce';
import MovieCard from '~/components/MovieCard';
import { useMMKVObject } from 'react-native-mmkv';
import { Favorite } from '~/interfaces/moviesinterfaces';
import Animated from 'react-native-reanimated';

export default function HomeScreen() {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  const theme = useTheme();


  return (
    <View>
      <Container>
        <ScrollView showsVerticalScrollIndicator={true} >
          <YStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$1" space
          >
          {
            favorites?.map((fav) => (
              <Link key={fav.id} href={`/(drawer)/favorites/${fav.mediaType}/${fav.id}`} asChild>
                <ListItem
                  p={10}
                  theme={'alt1'}
                  title={fav.name}
                  size={'$3'}
                  icon={() => (
                    <Animated.Image
                      source={{ uri: `https://image.tmdb.org/t/p/w500${fav.thumb}` }}
                      style={{ width: 150, height: 150, borderRadius: '10px' }}

                    ></Animated.Image>
                  )}>

                </ListItem>
              </Link>
            ))
          }
          </YStack>
        </ScrollView>
      </Container>
    </View>
  );
}
