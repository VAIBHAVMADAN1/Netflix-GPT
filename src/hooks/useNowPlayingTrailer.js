import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants'

import { useDispatch } from 'react-redux';

import { addNowPlayingTrailer } from '../utils/moviesSlice';

const useNowPlayingTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await videos.json();
        const filteredData = json.results.filter(movie => movie.type === "Trailer");
        const selectedVideo = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addNowPlayingTrailer(selectedVideo.key));
    }
    useEffect(() => {
        getMovieTrailer();
    }, [])
}

export default useNowPlayingTrailer;