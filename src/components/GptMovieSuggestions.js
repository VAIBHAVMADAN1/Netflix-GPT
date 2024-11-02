import React from 'react'
import { useSelector } from 'react-redux'
import VideoList from './VideoList';

const GptMovieSuggestions = () => {
  const {gptMovies, gptNames} = useSelector((store)=>store.gpt);
  console.log(gptMovies);
  console.log(gptNames);
  if (!gptNames) return null;
  return <>
    <div className="text-red bg-white">
      {gptNames.map(
        (movie,index)=> <VideoList key={movie} title={movie} movies={gptMovies[index]}/>
      )}
    </div>
  </>
}

export default GptMovieSuggestions