import { View, Text } from 'tamagui'
import { MediaType } from '~/interfaces/moviesinterfaces';
import { useLocalSearchParams } from 'expo-router';
import DetailsPage from '~/components/DetailsPage';



const Page = () => {
  const movie = useLocalSearchParams<{id: string}>();
  return (
    <DetailsPage id={movie.id} mediaType={MediaType.Movie} />
  )
}

export default Page;