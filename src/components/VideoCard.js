import React from 'react'

const VideoCard = ({movie}) => {

  return !movie ? undefined : (
          <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster"
          className="w-40 pr-3"
          /> 
        )
}

export default VideoCard