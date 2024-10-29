import React from 'react'

import { useSelector } from 'react-redux'

import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if (!movies) return;
    const movie = movies[0];
    return (
        <div className="relative">
            <VideoTitle title={movie.title} overview={movie.overview} />
            <VideoBackground movieId={movie.id} />
        </div>
    )
}

export default MainContainer