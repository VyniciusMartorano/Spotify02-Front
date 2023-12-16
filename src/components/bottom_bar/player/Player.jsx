import React, { useRef, useState, useEffect } from "react"
import './Player.css'
import Slider from "../../slider/Slider"
import IconHeart from "../iconHeart/IconHeart"
import IconShuffle from "../iconShuffle/IconShuffle"
import IconRepeat from "../iconRepeat/IconRepeat"
import VolumeBar from "../../volumebar/VolumeBar"
import IconVolume from '../../iconvolume/IconVolume'
import { useSelector } from "react-redux"
import getTimeInMinutesFormated from "../../../utils/getTimeInMinutes"


//TODO: resetar o time da musica quando for setada outra musica

const Player = (props) => {
    const audioRef = useRef()
    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`

    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    const currentMusic = useSelector(state => state.musicReducer.currentMusic)
    const volume = useSelector(state => state.musicReducer.volume)
    const repeatMode = useSelector(state => state.coreReducer.repeatMode)

    useEffect(
      () => {
          audioRef.current.volume = volume / 100
      }, [volume]
    )


    const finishedAudio = () => {
      if (repeatMode) audioRef.current.load()
      else {
        setPercentage(0)
        playPauseMusic()
      }

    }
  
    const onChangeMusic = ({ target }) => {
      audioRef.current.currentTime = (audioRef.current.duration / 100) * target.value

      setPercentage(target.value)
    }

    const newMusicIsSetted = (percentage) => isNaN(percentage)

    
    const setNewMusic = () => {
      setPercentage(0)
      setIsPlaying(true)
      audioRef.current.play()
    }

    const audioIsFinished = () => (currentMusic.duration - currentTime) < 0.5
    
    const getCurrDuration = () => {
      const percent = ((audioRef.current.currentTime / audioRef.current.duration) * 100).toFixed(2)
      const time = audioRef.current.currentTime

      setCurrentTime(time.toFixed(2))    
      
      if (newMusicIsSetted(percent)) setNewMusic()
      else {
        if (audioIsFinished()) {
          finishedAudio()
          return
        }
        setPercentage(+ percent)
      }

    }
  
    const playPauseMusic = () => {
      if (!currentMusic.id) return

      if (!isPlaying) {
        setIsPlaying(true)
        audioRef.current.play()
      }
  
      else if (isPlaying) {
        setIsPlaying(false)
        audioRef.current.pause()
      }
    }

    return (
        <div className="player-container">
            <div className="box-player">
                <div id="left-item-player-bar" className="item-player">
                    <div id="box-image-player">
                      {currentMusic.id && (
                        <img 
                            src={url + currentMusic.image} 
                            width="50" 
                            height="50"
                        />
                      )}
                    </div>
                    <div className="texts-content-player">
                        <h3 className="title-music-player">{currentMusic.music_name}</h3>
                        <span className="autor-music-player">{currentMusic.artist_name}</span>
                    </div>
                    <div className="fav-div-icon">
                        {currentMusic.id && (<IconHeart />)}
                    </div>
                </div>
                <div id="center-item-player-bar" className="item-player">
                    <div className="player-buttons-container">
                        <IconShuffle />
                        <div className="icon-button i-normal"><i className="fa-solid fa-backward-step"></i></div>
                    
                        <div className="icon-button-pp i-larger">
                          <i onClick={playPauseMusic}
                          className={isPlaying
                            ? "fa-solid fa-circle-pause"
                            : "fa-solid fa-circle-play"
                          }
                          />
                        </div>

                        <div>
                          <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        </div>
                        <IconRepeat />
                    </div>
                    <audio
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      src={url + currentMusic.file}
                    />
                    <div id="slider-container-external">
                      <span className="span-time-slider">{getTimeInMinutesFormated(currentTime)}</span>
                      <Slider
                        percentage={percentage}
                        onChange={onChangeMusic}
                      />
                      <span className="span-time-slider">{getTimeInMinutesFormated((currentMusic.duration - currentTime) || 0)}</span>
                    </div>
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume />
                    <VolumeBar />
                </div>
            </div>
        
        </div>
    )
}


export default Player