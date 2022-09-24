import React from "react"



function InputMusic({ downloadMode, onChange}) {
    return (
        <div className="inp-music-container">
            <input 
                onChange={(e) => onChange(e.target[downloadMode == 1 ? 'value':'files'])}
                className={downloadMode == 1 ? 'text-input': 'input-file-mode'} 
                type={ downloadMode == 1 ? 'text' : 'file' } 
                name={ downloadMode == 1 ? 'url': 'file'  } 
                id="music" 
            />
        </div> 
    )
}


export default InputMusic