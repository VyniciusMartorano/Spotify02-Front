import {React, useState, useRef, useEffect} from "react"
import '../assets/css/Slider.css'
import '../assets/css/Thumb.css'


export default function TimeBar ({percentage = 0, onChange}){
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setprogressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect(
        () => {
            const rangeWidth = rangeRef.current.getBoundingClientRect().width
            const thumbWidth = thumbRef.current.getBoundingClientRect().width
            const centerThumb = (thumbWidth / 100) * percentage * -1
            const centerProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
            setPosition(percentage)
            setMarginLeft(centerThumb) 
            setprogressBarWidth(centerProgressBar)
        }, [percentage]
    )

    return (
        <div className="slider-container">
            <div className="progress-bar-cover" style={
                {width: `${progressBarWidth}px`}
            }>
            </div>
            <div
            className="thumb"
            ref={thumbRef}
            style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}
            ></div>

            <input type="range" 
            value={position}
            ref={rangeRef}
            step='0.01'
            className="range"
            onChange={onChange}
            />

        </div>
    )

}
