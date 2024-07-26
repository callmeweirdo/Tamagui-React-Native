import { View, Text } from 'tamagui'
import { MediaType } from '~/interfaces/moviesinterfaces';

type detailsPageProps = {
    id: string,
    mediaType: MediaType
}

const DetailsPage = ({id, mediaType}: detailsPageProps) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{mediaType}</Text>
    </View>
  )
}

export default DetailsPage;