import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants'

import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    // Fetch data from TMDB api and update store
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            let m = [];
            let movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
            let json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=5', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=7', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            console.log(m);
            dispatch(addNowPlayingMovies(m));
        }
        getNowPlayingMovies();
    }, [dispatch])
}

export default useNowPlayingMovies;