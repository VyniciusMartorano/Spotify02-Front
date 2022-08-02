import React, { Component } from "react"
import '../css/IconVolume.css'


export default class IconVolume extends Component {
    render () {
        return (
            <div style={{display: 'flex'}}>
                <i style={{display: 'none'}} className="fa-solid fa-volume-xmark icon-volume"></i>
                <i style={{display: 'none'}} className="fa-solid fa-volume-low icon-volume"></i>
                <i className="fa-solid fa-volume-high icon-volume"></i>
            </div>
        )
    }
}