import React, { Component } from "react"
import './Player.css'
import TimeBar from "./TimeBar"
import IconPlayPause from "./IconPlayPause"
import IconHeart from "./IconHeart"
import VolumeBar from "./VolumeBar"
import IconVolume from './IconVolume'
import Audio from "./Audio"



export default class Player extends Component {
    constructor(props) {
        super()
        this.array = props.pp
        this.Audio = new Audio()
    }

    print = () => console.log(this.array)

    render() {
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
                        <i onClick={this.Audio.playAudio} className="fa-solid fa-shuffle icon-button i-tiny"></i>
                        <i className="fa-solid fa-backward-step icon-button i-normal"></i>
                        <IconPlayPause/>
                        <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        <i className="fa-solid fa-repeat icon-button i-tiny"></i>
                    </div>
                    <TimeBar/>
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume/>
                    <VolumeBar/>
                </div>
            </div>
            <Audio/>
        </div>
        )
    }
}
