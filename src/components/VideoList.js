import React from 'react'

import VideoCard from './VideoCard'

const VideoList = ({ movies, title }) => {
    return !movies ? [] : (
        <div className="m-4">
            <h1 className="text-3xl">{title}</h1>
            <div class="flex overflow-x-scroll">
                {movies.map(movie => <VideoCard movie={movie} />)}
            </div>
        </div>
    )
}

export default VideoList