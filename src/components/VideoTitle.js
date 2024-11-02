import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="mt-36 ml-24 absolute">
      <h1 className="mb-4 text-xl bg-white text-black w-fit sm:text-4xl">{title}</h1>
      <p className="mb-4 bg-white text-black bg-opacity-80 w-1/4 text-justify invisible lg:visible">{overview}</p>
      <button className="mx-2 my-2 py-2 px-12 text-lg bg-white text-black hover:bg-opacity-80 invisible lg:visible">▶️ Play</button>
      <button className="mx-2 my-2 py-2 px-12 text-lg bg-white text-black invisible lg:visible">ⓘ More Info</button>
    </div>
  )
}

export default VideoTitle