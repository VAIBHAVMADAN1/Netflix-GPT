import React from 'react'

import VideoCard from './VideoCard'

const VideoList = ({ movies, title }) => {
    return !movies ? [] : (
        <div className="m-4">
            <h1 className="text-3xl">{title}</h1>
            <div className="flex overflow-x-scroll">
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default VideoList