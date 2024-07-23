import { MediaType, TrendingResult } from "~/interfaces/moviesinterfaces";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`);

    const result = await response.json();
    return result;
}

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
    console.log('SEARCH: ', query);

    const response = await fetch(`https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`);

    const data = await response.json();
    return data;

}

export const getMoviesDetails = async (): Promise<any> => {
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`);
    const data = response.json();
    return data;
}