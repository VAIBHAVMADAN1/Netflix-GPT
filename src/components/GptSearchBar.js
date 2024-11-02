import React from 'react'

import { NETFLIX_BACKGROUND } from '../utils/constants'

import LANGUAGE_CONSTANTS from "../utils/languageConstants";

import { useSelector } from 'react-redux';



const GptSearchBar = () => {
  const selectedLanguage = useSelector(state=>state.language.lang);
  console.log(selectedLanguage);
  console.log(LANGUAGE_CONSTANTS[selectedLanguage]);
  return (
    <>
    <div className="pt-40 flex justify-center text-black">
        <img
          src={NETFLIX_BACKGROUND}
          alt="netflix background"
          className="absolute w-full h-screen object-cover -z-10"
        />
      <form onSubmit={e=>e.preventDefault()}
      className="grid grid-cols-12 w-1/2">
          <input placeholder={ LANGUAGE_CONSTANTS[selectedLanguage].gptSearchPlaceholder}
        className="col-span-9 mx-2 px-4 py-2"></input>
          <button className="col-span-3 bg-red-700 text-white">{LANGUAGE_CONSTANTS[selectedLanguage].search}</button>
      </form>
    </div>
    </>
  )
}

export default GptSearchBar

// placeholder={LANGUAGE_CONSTANTS.selectedLanguage.gptSearchPlaceholder}