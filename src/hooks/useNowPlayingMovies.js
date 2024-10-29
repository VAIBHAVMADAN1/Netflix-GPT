import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants'
import { API_URL } from '../utils/constants'

import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    // Fetch data from TMDB api and update store
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const movies = await fetch(API_URL, API_OPTIONS);
            const json = await movies.json();
            console.log(json.results);
            dispatch(addNowPlayingMovies(json.results));
        }
        getNowPlayingMovies();
    }, [dispatch])
}

export default useNowPlayingMovies;