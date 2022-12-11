import React, { Component } from "react"
import '../assets/css/IconVolume.css'


export default class IconVolume extends Component {
    render () {
        return (
            <div style={{display: 'flex'}}>
                <i style={{display: 'none'}} className="fa-solid fa-volume-xmark icon-volume"></i>
                <i style={{display: 'none'}} className="fa-solid fa-volume-low icon-volume"></i>
                <div className="icon-volume"><i className="fa-solid fa-volume-high"></i></div>
            </div>
        )
    }
}