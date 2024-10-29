import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="mt-36 ml-24 absolute">
      <h1 className="mb-4 text-4xl bg-white text-black w-fit">{title}</h1>
      <p className="mb-4 bg-white text-black bg-opacity-80 w-1/4 text-justify">{overview}</p>
      <button className="mx-2 my-2 py-2 px-12 text-lg bg-white text-black hover:bg-opacity-80">▶️ Play</button>
      <button className="mx-2 my-2 py-2 px-12 text-lg bg-white text-black">ⓘ More Info</button>
    </div>
  )
}

export default VideoTitle