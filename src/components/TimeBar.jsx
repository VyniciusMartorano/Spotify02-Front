import React, { Component } from "react"
import '../css/TimeBar.css'


export default (props) => {
    
    return (
        <div className="time-bar-container">
            <span className="time-bar-text">1:40</span>
            <div className="progress-container">
                <div style={{width: "240px"}} className="progress-current-time"></div>
            </div>
            <span className="time-bar-text">{props.musicTime}</span>
        </div>
    )
    
}