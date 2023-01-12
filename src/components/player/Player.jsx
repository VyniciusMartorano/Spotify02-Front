import React, { useRef, useState } from "react"
import '../../assets/css/Player.css'
import Slider from "../Slider"
import IconHeart from "../IconHeart"
import VolumeBar from "../VolumeBar"
import IconVolume from '../IconVolume'
import { useSelector, useDispatch } from "react-redux"
import { actSetVolume } from "../../store/actions/musicActions"



const Player = (props) => {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [shuffleMode, setShuffleMode] = useState(true)
    const [repeatMode, setRepeatMode] = useState(false)

    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`
  
    const audioRef = useRef()
    const dispatch = useDispatch()

    const currentMusic = useSelector(state => state.musicReducer.currentMusic)
    const volume = useSelector(state => state.musicReducer.volume)

  
    const onChangeMusic = (e) => {
      const audio = audioRef.current
      audio.currentTime = (audio.duration / 100) * e.target.value
      setPercentage(e.target.value)
    }

  
    const play = () => {

      //setar volume no redux
  
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
      
      console.log(time)
  
      setPercentage(+ percent)
      setCurrentTime(time.toFixed(2))
    }


    return (
        <div className="player-container">
            <div className="box-player">
                <div id="left-item-player-bar" className="item-player">
                    <div id="box-image-player">
                    <img 
                        className="" 
                        src={url + currentMusic.image} 
                        width="65" 
                        height="65"
                        alt="" 
                    />
                    </div>
                    <div className="texts-content-player">
                        <h3 className="title-music-player">{currentMusic.music_name}</h3>
                        <span className="autor-music-player">{currentMusic.artist_name}</span>
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
                        <div className=" icon-button i-tiny">
                          <i
                            onClick={() => setShuffleMode(!shuffleMode)}
                            id={`${shuffleMode ? 'icon-btn-active' : ''}`}
                            className={
                              `fa-solid fa-shuffle ${shuffleMode ? ' shuffle-mode-style-active': ''}`
                              }>
                          </i>
                        </div>
                        <div className="icon-button i-normal"><i className="fa-solid fa-backward-step"></i></div>
                    
                        <div className="icon-button-pp i-larger">
                          <i onClick={play}
                          className={isPlaying
                            ? "fa-solid fa-circle-pause"
                            : "fa-solid fa-circle-play"}
                          />
                        </div>

                        <div><i className="fa-solid fa-forward-step icon-button i-normal"></i></div>
                        <div className="icon-button i-tiny">
                          <i
                            onClick={() => setRepeatMode(!repeatMode)}
                            id={`${repeatMode ? 'icon-btn-active' : ''}`}
                            className={`fa-solid fa-repeat`}>
                          </i>
                        </div>
                    </div>
                    
                    <audio
                      ref={audioRef}
                      onTimeUpdate={getCurrDuration}
                      onLoadedData={e => setDuration(e.currentTarget.duration.toFixed(2))}
                      volume={volume}
                      src={url + currentMusic.file}
                    />
                    <div id="slider-container-external">
                      <span className="span-time-slider">0:30</span>
                      <Slider
                        percentage={percentage}
                        onChange={onChangeMusic}
                      />
                      <span className="span-time-slider">2:45</span>
                    </div>
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume/>
                    <VolumeBar
                      onChange={value => {
                        dispatch(actSetVolume({volume: value}))
                      }}
                    />
                </div>
            </div>
        
        </div>
    )
}


export default Player