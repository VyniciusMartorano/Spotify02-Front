import React, { Component } from "react"
import { connect } from "react-redux"
import './style.css'


 class IconVolume extends Component {

    getStringVolume(string) {
        const BASE_STRING = 'fa-solid fa-volume-'

        return BASE_STRING + string
    }


    switchBetweenVolumeIcon = (volume) => {
        if (volume == 0) return this.getStringVolume('xmark') 
        else if (volume < 60) return this.getStringVolume('low') 
        else return this.getStringVolume('high') 
    }


    render () {
        return (
            <div style={{display: 'flex'}}>
                <div className="icon-volume"><i className={this.switchBetweenVolumeIcon(this.props.volume)}></i></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        volume: state.musicReducer.volume
    })
}

export default connect(mapStateToProps)(IconVolume)