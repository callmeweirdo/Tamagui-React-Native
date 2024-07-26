import { View, Text } from 'react-native'
import { MediaType } from '~/interfaces/moviesinterfaces';
import { useLocalSearchParams } from 'expo-router';



const DetailsPage = () => {
  const movie = useLocalSearchParams<{id: string}>();
  return (
    <DetailsPage id={movie.id} mediaType={MediaType.Tv} />
  )
}

export default DetailsPage