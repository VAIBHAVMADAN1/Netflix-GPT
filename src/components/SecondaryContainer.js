import React from 'react'

import VideoList from './VideoList'

import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies?.nowPlayingMovies);
  return (
    <div className="bg-black text-white">
      <VideoList movies={movies} title={"Latest movies"}/>
      <VideoList movies={movies} title={"Latest movies"}/>
      <VideoList movies={movies} title={"Latest movies"}/>
      <VideoList movies={movies} title={"Latest movies"}/>
    </div>
  )
}

export default SecondaryContainer