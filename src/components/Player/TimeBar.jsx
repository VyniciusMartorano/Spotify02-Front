import React, { Component } from "react"
import './TimeBar.css'


export default class TimeBar extends Component {
    render () {
        return (
            <div className="time-bar-container">
                <span className="time-bar-text">1:40</span>
                <div className="progress-container">
                    <div style={{width: "240px"}} className="progress-current-time"></div>
                </div>
                <span className="time-bar-text">3:20</span>
            </div>
        )
    }
}