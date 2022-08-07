import React, { useRef, useState } from "react"
import '../assets/css/Player.css'
import TimeBar from "./TimeBar"
import IconHeart from "./IconHeart"
import VolumeBar from "./VolumeBar"
import IconVolume from './IconVolume'
import PlayerService from "./services/Player-service"
import {Howl, Howler} from 'howler';



const Player = (props) => {
        //const queueMusics = props.queueMusics
        //let currentIndex = 0
        let [isPlaying, setisPlaying] = useState(false)
        let [currentMusic, setCurrentMusic] = useState({})
        const audioPlayer = useRef()
        const PlayServ = new PlayerService()
        const howlerPlayer = new Howl({src: "Post Malone - Circles.mp3"})


        async function setMusic () {
            const response = await PlayServ.get()
            setCurrentMusic({...response[0]})

        }


        const playPauseMusic = () => {
            setMusic()
        if (isPlaying) {
            howlerPlayer.pause()
            setisPlaying(false)
        }
        else {
            howlerPlayer.play()
            setisPlaying(true)
        }
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
                        <IconHeart/>
                    </div>
                </div>
                <div id="center-item-player-bar" className="item-player">
                    <div className="player-buttons-container">
                        <i className="fa-solid fa-shuffle icon-button i-tiny"></i>
                        <i className="fa-solid fa-backward-step icon-button i-normal"></i>
                        {
                        isPlaying ? <i onClick={playPauseMusic} className="fa-solid fa-circle-pause icon-button-pp i-larger"></i>:<i onClick={playPauseMusic} className="fa-solid fa-circle-play icon-button-pp i-larger"></i>
                        }

                        <audio ref={audioPlayer} src="../../../backend/musics-bd/Post Malone - Circles.mp3"/>
                        <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        <i className="fa-solid fa-repeat icon-button i-tiny"></i>
                    </div>
                    <TimeBar musicTime={currentMusic.duration} />
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