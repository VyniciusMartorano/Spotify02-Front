import React, { useRef, useState } from "react"
import '../assets/css/Player.css'
import TimeBar from "./TimeBar"
import IconHeart from "./IconHeart"
import VolumeBar from "./VolumeBar"
import IconVolume from './IconVolume'
import PlayerService from "./services/Player-service"



const Player = (props) => {
        const [isPlaying, setIsPlaying] = useState(false)
        const [percentage, setPercentage] = useState(0)
        const [duration, setDuration] = useState(0)
        const [currentTime, setCurrentTime] = useState(0)
        const [currentMusic, setCurrentMusic] = useState({liked:false})
        const audioRef = useRef()
        const PlayServ = new PlayerService()


        async function componentWillMount () {
            const response = await PlayServ.get()
            setCurrentMusic(response[0])
        }

        const onChange = (e) => {
            const audio = audioRef.current
            audio.currentTime = (audio.duration / 100) * e.target.value
            setPercentage(e.target.value)
        }

        const play = () => {
            const audio = audioRef.current
            audio.volume = 0.1
        
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
                        <IconHeart state={currentMusic.liked}/>
                    </div>
                </div>
                <div id="center-item-player-bar" className="item-player">
                    <div className="player-buttons-container">
                        <i className="fa-solid fa-shuffle icon-button i-tiny"></i>
                        <i className="fa-solid fa-backward-step icon-button i-normal"></i>
                    
                        <i onClick={play} className={isPlaying ? "fa-solid fa-circle-pause icon-button-pp i-larger" : "fa-solid fa-circle-play icon-button-pp i-larger"}/>
                        

                        <audio ref={audioRef}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => {
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
                        src={currentMusic.file}
                        />
                        <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        <i className="fa-solid fa-repeat icon-button i-tiny"></i>
                    </div>
                    <TimeBar 
                    percentage={percentage} 
                    onChange={onchange} 
                    />
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume/>
                    <VolumeBar/>
                </div>
            </div>
           
        </div>
        )
}

export default Player