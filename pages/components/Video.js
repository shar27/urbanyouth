import React from 'react'
import ReactPlayer from 'react-player'
import {useState } from 'react'

function Video() {
    const [isPlaying, setIsPlaying] = useState(true);
    return (

<div>
<ReactPlayer 
   priority
   autoPlay 
   loop
   muted
   className='react-player'
    url="https://assets.mixkit.co/videos/preview/mixkit-classroom-with-children-raising-their-hands-35954-large.mp4"    
    playing={isPlaying}
    height = '60%'
    width = '100%'
     
  /> 
        </div>
    )
}


export default Video
