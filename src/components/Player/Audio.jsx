import React, { Component } from "react"


export default class Audio extends Component {

    setSrcAudio = (path) => {
        return ''
    }

    playAudio = () => document.getElementById('audio').play()

    render () {
        return (
            <audio id="audio" autoPlay src="\PostMalone-Circles.mp4" ></audio>
        )
    }
}