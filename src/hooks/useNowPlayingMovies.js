import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants'

import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    // Fetch data from TMDB api and update store
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
            const json = await movies.json();
            dispatch(addNowPlayingMovies(json.results));
        }
        getNowPlayingMovies();
    }, [dispatch])
}

export default useNowPlayingMovies;