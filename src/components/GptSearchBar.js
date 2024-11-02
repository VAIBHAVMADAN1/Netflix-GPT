import React, { useRef } from 'react'

import LANGUAGE_CONSTANTS from "../utils/languageConstants";

import { useDispatch, useSelector } from 'react-redux';

import {openai} from "../utils/openai";
import { addGptMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText= useRef(null);
  const selectedLanguage = useSelector(state=>state.language.lang);

  async function tmdbSearch(movie) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM5ZGVhMTc1ZTQ1NDk4MzU4OTRmNjE4MTlmN2ZhYiIsIm5iZiI6MTczMDU1MzUzMy4xNTEzNzMxLCJzdWIiOiI2NmFlNzAzNzY4MjYxN2QyMTU4MGU0NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5xQuFzk2c-q7aUU8dKcMdktYVDkGnb7cMRq9umFvJAk'
      }
    };

    const p = await fetch(url, options);
    const json = await p.json();
    return json.results;
  }

   async function handleGPTsearch(value) {
     const result = await openai(value);
     console.log(result);
     const promiseArray =  result.map(movie => tmdbSearch(movie));
     const movies = await Promise.all(promiseArray);
     console.log(movies);

     dispatch(addGptMovies({movieNames: result, movieResults: movies}));
  }
  return (
    <>
    <div className="pt-40 flex justify-center text-black">
        {/* <img
          src={NETFLIX_BACKGROUND}
          alt="netflix background"
          className="absolute w-full h-screen object-cover -z-10"
        /> */}
      <form onSubmit={e=>{
        e.preventDefault()
        handleGPTsearch(searchText.current.value);
      }}
      className="grid grid-cols-12 w-1/2">
          <input placeholder={ LANGUAGE_CONSTANTS[selectedLanguage].gptSearchPlaceholder}
        className="col-span-9 mx-2 px-4 py-2"
        ref={searchText}></input>
          <button className="col-span-3 bg-red-700 text-white">{LANGUAGE_CONSTANTS[selectedLanguage].search}</button>
      </form>
    </div>
    </>
  )
}

export default GptSearchBar

// placeholder={LANGUAGE_CONSTANTS.selectedLanguage.gptSearchPlaceholder}