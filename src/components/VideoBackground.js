import React from 'react';
import { useSelector } from 'react-redux';
import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer';

const VideoBackground = ({ movieId }) => {
  useNowPlayingTrailer(movieId);
  const movieTrailer = useSelector(state => state.movies?.nowPlayingTrailer);

  if (!movieId) return undefined;
  return (
    <div className="w-screen h-screen aspect-video">
    {/* <div className="fixed inset-0 w-full h-full z-[-1]"> */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&cc_load_policy=3`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default VideoBackground;
