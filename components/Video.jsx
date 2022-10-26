import React from 'react'
import { Player } from 'video-react';
import "/node_modules/video-react/dist/video-react.css";


const Video = () => {
  return (
    <Player
      playsInline
      poster="/banner1.webp"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  )
}

export default Video