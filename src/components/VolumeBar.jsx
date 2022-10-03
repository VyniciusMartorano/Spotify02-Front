import '../assets/css/VolumeBar.css'
import {React, useState, useRef, useEffect} from "react"


export default function VolumeBar ({percentage = 0, onChange}){
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setprogressBarWidth] = useState(0)

    const volumeBarRef = useRef()
    const thumbRef = useRef()

    useEffect(
        () => {
            const rangeWidth = volumeBarRef.current.getBoundingClientRect().width
            const thumbWidth = thumbRef.current.getBoundingClientRect().width
            const centerThumb = (thumbWidth / 100) * percentage * -1
            const centerProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
            setPosition(percentage)
            setMarginLeft(centerThumb) 
            setprogressBarWidth(centerProgressBar)
        }, [percentage]
    )

    return (
        <div className="volume-bar-container">
            <div className="progress-bar-cover" style={
                {width: `${progressBarWidth}px`}
            }>
            </div>
            <div
            className="thumb-volume"
            ref={thumbRef}
            style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}
            ></div>

            <input 
                type="range" 
                value={position}
                ref={volumeBarRef}  
                step='0.01'
                className="range-volume"
                onChange={onChange}
                min={0}
                max={100}
            />

        </div>
    )

}
