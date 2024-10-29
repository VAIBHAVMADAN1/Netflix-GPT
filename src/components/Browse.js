import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from './Header';

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div className="">
      <Header />
      <div>
        <MainContainer/>
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
