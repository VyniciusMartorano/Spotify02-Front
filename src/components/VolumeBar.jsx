import React, { Component } from "react"
import '../assets/css/VolumeBar.css'



export default class VolumeBar extends Component {
    render () {
        return (
            <div className="volume-container">
                <div style={{width: '40px'}} className="nivel-volume">
                </div>
            </div>
        )
    }
}