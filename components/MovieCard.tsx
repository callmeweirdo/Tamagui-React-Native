import { Link } from "expo-router";
import { Image, Paragraph, YStack } from "tamagui";
import { Card, Text } from "tamagui";
import { ResultItem } from "~/interfaces/moviesinterfaces";

type MovieCard = {
    movie: ResultItem
}

const MovieCard = ({ movie }: MovieCard) => (
    <Link href={`/(drawer)/home/${movie.media_type ? 'movie' : 'movie'}/${movie.id}`} >
        <Card
            height={260}
            width={150}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.975 }}
            animation={'bouncy'}
        >
            <Card.Header p={0}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
                    alt={movie.title}
                    style={{ width: 150, height: 200 }}
                />
            </Card.Header>
            <Card.Footer p={8}>
                <YStack>
                    <Text fontSize={20} color={'lightblue'} >{movie.title || movie.name}</Text>
                    <Paragraph theme={'alt1'} >{ new Date(movie.release_date || movie.first_air_date).getFullYear()}.</Paragraph>
                </YStack>
            </Card.Footer>
        </Card>
    </Link>
);

export default MovieCard;