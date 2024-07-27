import { View, Text, ScrollView, Image, YStack, H1, Paragraph, Button, useTheme } from 'tamagui'
import { Favorite, MediaType } from '~/interfaces/moviesinterfaces';
import { useQuery } from '@tanstack/react-query';
import { getMoviesDetails } from '~/services/api';
import { Main } from '~/tamagui.config';
import { ImageBackground } from 'react-native';
import { H2 } from 'tamagui';
import Animated from 'react-native-reanimated';
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type detailsPageProps = {
    id: string,
    mediaType: MediaType
}

const DetailsPage = ({ id, mediaType }: detailsPageProps) => {

  const [isFavorite, setIsFavorite] = useMMKVBoolean(`${mediaType}-${id}`);
  const [favorite, setFavorite] = useMMKVObject<Favorite[]>('favorites');

  const theme = useTheme();

  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMoviesDetails(id, mediaType),
  });

  const toggleFavorite = () => {
    const current = favorite || [];

    if (!isFavorite) {
      setFavorite([
        ...current,
        {
          id,
          mediaType,
          thumb: movieQuery.data?.poster_path,
          name: movieQuery.data?.title || movieQuery.data?.name
        }
      ]);
    } else {
      setFavorite(current.filter((fav) => fav.id !== id || fav.mediaType !== mediaType));
    }

    setIsFavorite(!isFavorite);
    
  }

  return (
    <View>
      <Stack.Screen options={{ 
        headerRight: () => (
          <Button onPress={toggleFavorite} >
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={26} color={theme.yellow10.get()} />
          </Button>
        )
       }}>
      </Stack.Screen>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}` 
          }}
        >
          <Animated.Image
            source={{
              uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`
            }}
            style={{ width: 250, height: 300, margin: 20 }}
            borderRadius={5}
          />
        </ImageBackground>

        <YStack
          animation={'lazy'}
          enterStyle={{ 
            opacity: 0,
            y: 10
          }}
          mt={20}
          p={20}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <H2 color={'$yellow3'} >{movieQuery.data?.title || movieQuery.data?.name}
            <span>
            <Text fontSize={16} >(OGDevs 2024)</Text>
            </span>
          </H2>
          <Paragraph  >{movieQuery.data?.tagline}</Paragraph>
          <Text fontSize={16} >{ movieQuery.data?.overview}</Text>
        </YStack>

      </ScrollView>
    </View>
  )
}

export default DetailsPage;