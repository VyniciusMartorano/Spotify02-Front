import '../assets/css/VolumeBar.css'
import { React, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { actSetVolume } from '../store/actions/musicActions'
import { useEffect } from 'react'


const VolumeBar = (props) =>  {
    const volumeRef = useRef()
    const currentVolume = useSelector(state => state.musicReducer.currentVolume)
    const dispatch = useDispatch()

    useEffect(
        () => {
            const valPercent = (currentVolume / volumeRef.current.max) * 100
            volumeRef.current.style.background = `linear-gradient(to right, rgb(249,249,249) ${valPercent}%, rgb(94, 94, 94) ${valPercent}%)`
            
        }, [currentVolume]
    )
 

    return (
        <div className="volume-bar-container">
            <input 
                id='range-volume'
                ref={volumeRef}
                type="range" 
                value={currentVolume}
                onInput={({ target }) => dispatch(actSetVolume({volume: target.value}))}
                min={0}
                max={100}
            />
        </div>
    )
}


export default VolumeBar