import { View, Text, ScrollView, Image, YStack, H1, Paragraph } from 'tamagui'
import { MediaType } from '~/interfaces/moviesinterfaces';
import { useQuery } from '@tanstack/react-query';
import { getMoviesDetails } from '~/services/api';
import { Main } from '~/tamagui.config';
import { ImageBackground } from 'react-native';
import { H2 } from 'tamagui';

type detailsPageProps = {
    id: string,
    mediaType: MediaType
}

const DetailsPage = ({ id, mediaType }: detailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMoviesDetails(id, mediaType),
  });
  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}` 
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`
            }}
            w={200}
            h={300}
            borderRadius={5}
              m={20}
          />
        </ImageBackground>

        <YStack>
          <H2 color={'$yellow3'} >{movieQuery.data?.title || movieQuery.data?.name}
            <Text fontSize={16} >(OGDevs 2024)</Text>
          </H2>
          <Paragraph>{ movieQuery.data?.tagline}</Paragraph>
        </YStack>

      </ScrollView>
    </Main>
  )
}

export default DetailsPage;