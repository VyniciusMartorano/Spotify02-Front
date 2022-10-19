import React, { useRef, useState } from "react"
import '../assets/css/Player.css'
import Slider from "./Slider"
import IconHeart from "./IconHeart"
import VolumeBar from "./VolumeBar"
import IconVolume from './IconVolume'
import song from './Guns N Roses - Patience (Official Music Video).mp3'




const Player = () => {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [shuffleMode, setShuffleMode] = useState(true)
    const [repeatMode, setRepeatMode] = useState(false)
    const [volume, setVolume] = useState(0.5)
  
    const audioRef = useRef()
  
    const onChangeMusic = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
    }

    const onChangeVolume = () => {
      const audio = audioRef.current
      audio.volume = volume / 100
    }

  
  
    const play = () => {
      const audio = audioRef.current
      audio.volume = 1
  
      if (!isPlaying) {
        setIsPlaying(true)
        audio.play()
      }
  
      if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
      }
    }
  
    const getCurrDuration = (e) => {
      const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
      const time = e.currentTarget.currentTime
  
      setPercentage(+percent)
      setCurrentTime(time.toFixed(2))
    }


    return (
        <div className="player-container">
            <div className="box-player">
                <div id="left-item-player-bar" className="item-player">
                    <div id="box-image-player">
                    </div>
                    <div className="texts-content-player">
                        <h3 className="title-music-player">Rockstar</h3>
                        <span className="autor-music-player">Post Malone</span>
                    </div>
                    <div className="fav-div-icon">
                        <IconHeart 
                          onChange={(value) => setIsLiked(value)}
                          liked={isLiked}
                        />
                    </div>
                </div>
                <div id="center-item-player-bar" className="item-player">
                    <div className="player-buttons-container">
                        <i 
                          onClick={() => setShuffleMode(!shuffleMode)} 
                          id={`${shuffleMode ? 'icon-btn-active' : ''}`}
                          className={
                            `fa-solid fa-shuffle icon-button i-tiny ${shuffleMode ? ' shuffle-mode-style-active': ''}`
                            }>
                        </i>
                        <i className="fa-solid fa-backward-step icon-button i-normal"></i>
                    
                        <i onClick={play} 
                        className={isPlaying 
                          ? "fa-solid fa-circle-pause icon-button-pp i-larger" 
                          : "fa-solid fa-circle-play icon-button-pp i-larger"}
                        />

                        <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        <i
                          onClick={() => setRepeatMode(!repeatMode)}
                          id={`${repeatMode ? 'icon-btn-active' : ''}`}
                          className={`fa-solid fa-repeat icon-button i-tiny`}>
                        </i>
                    </div>
                    
                    <audio
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      onLoadedData={e => setDuration(e.currentTarget.duration.toFixed(2))}
                      src={song}
                    />

                    <Slider 
                      percentage={percentage} 
                      onChange={onChangeMusic} 
                    />
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume/>
                    <VolumeBar
                      onChange={value => {
                        setVolume(value)
                        onChangeVolume()
                      }}
                    />
                </div>
            </div>
        
        </div>
    )
}

export default Player