import React, { Component } from "react"
import './IconPlayPause.css'


export default class IconPlayPause extends Component {

    render () {
        return (
            <div>
                <i className="fa-solid fa-circle-play icon-button-pp i-larger"></i>
                <i style={{display: 'none'}} className="fa-solid fa-circle-pause icon-button-pp i-larger"></i>
            </div>
        )
    }
}
