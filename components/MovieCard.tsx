import { Link } from "expo-router";
import { Text } from "tamagui";
import { ResultItem } from "~/interfaces/moviesinterfaces";

type MovieCard = {
    movie: ResultItem
}

const MovieCard = ({ movie }: MovieCard) => (
    <Link href={`/(drawer)/home/movie/${movie.id}`} >
        <Text>{ movie?.id}</Text>
    </Link>
)


export default MovieCard;