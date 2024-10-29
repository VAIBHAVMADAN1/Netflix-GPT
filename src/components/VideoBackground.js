import React from 'react';

import { useSelector } from 'react-redux';

import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer';

const VideoBackground = ({movieId}) => {
  useNowPlayingTrailer(movieId);
  const movieTrailer = useSelector(state=>state.movies?.nowPlayingTrailer);
  return (
    <div>
      <iframe
      src={`https://www.youtube.com/embed/${movieTrailer}`}
      title="YouTube video player"
      allow="web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground