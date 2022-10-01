import React from "react"



function InputMusic({ downloadMode, onChange}) {
    return (
        <div className="inp-music-container">
            {
            downloadMode == 1 ?
            (<input 
                onChange={(e) => onChange(e.target.value)}
                className={'text-input'} 
                type={'text'} 
                name={'url'} 
                id="music" 
            />) : (
                <input 
                    onChange={(e) => onChange(e.target.files)}
                    className={'input-file-mode'} 
                    type={'file'} 
                    name={'file'} 
                    id="music" 
                    accept="audio/*"
            />
            )
            }


        </div> 
    )
}


export default InputMusic