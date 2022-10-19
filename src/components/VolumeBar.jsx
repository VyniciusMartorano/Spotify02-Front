import '../assets/css/VolumeBar.css'
import { React, useRef } from "react"


const VolumeBar = ({ onChange }) =>  {

    const volumeRef = useRef()
 
    const slider = (value) => {
        const valPercent = (value / volumeRef.current.max) * 100
        volumeRef.current.style.background = `linear-gradient(to right, rgb(249,249,249) ${valPercent}%, rgb(94, 94, 94) ${valPercent}%)`
        onChange(value)
        
    }

    return (
        <div className="volume-bar-container">
            <input 
                id='range-volume'
                ref={volumeRef}
                type="range" 
                
                onInput={e => slider(e.target.value)}
                min={0}
                max={100}
            />
        </div>
    )
}


export default VolumeBar