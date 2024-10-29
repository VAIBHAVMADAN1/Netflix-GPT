import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="ml-20">
      <h1 className="mb-4 text-4xl">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <button className="my-2 py-2 px-12 text-lg bg-gray-600 bg-opacity-30">▶️ Play</button>
      <button className="mx-2 my-2 py-2 px-12 text-lg bg-gray-600 bg-opacity-30">More Info</button>
    </div>
  )
}

export default VideoTitle