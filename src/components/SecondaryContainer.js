import React from 'react'

import VideoList from './VideoList'

import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies?.nowPlayingMovies);
  if (!movies) return undefined;
  return (
    <div className="bg-black text-white">
      <VideoList movies={movies.slice(0,20)} title={"Movies"}/>
      <VideoList movies={movies.slice(20,40)} title={"Movies"}/>
      <VideoList movies={movies.slice(40,60)} title={"Movies"}/>
      <VideoList movies={movies.slice(60,80)} title={"Movies"}/>
    </div>
  )
}

export default SecondaryContainer