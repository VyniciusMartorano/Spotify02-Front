import '../assets/css/VolumeBar.css'
import { React, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { actSetVolume } from '../store/actions/musicActions'
import { useEffect } from 'react'


const VolumeBar = (props) =>  {
    const volumeRef = useRef()
    const volume = useSelector(state => state.musicReducer.volume)
    const dispatch = useDispatch()

    useEffect(
        () => {
            onChange(volume)   
        }, [volume]
    )
 
    const onChange = (value) => {
        const valPercent = (value / volumeRef.current.max) * 100
        volumeRef.current.style.background = `linear-gradient(to right, rgb(249,249,249) ${valPercent}%, rgb(94, 94, 94) ${valPercent}%)`

        dispatch(actSetVolume({volume: value}))        
    }

    return (
        <div className="volume-bar-container">
            <input 
                id='range-volume'
                ref={volumeRef}
                value={volume}
                type="range" 
                onInput={e => onChange(e.target.value)}
                min={0}
                max={100}
            />
        </div>
    )
}


export default VolumeBar