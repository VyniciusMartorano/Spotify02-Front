import {React, useState} from "react"



function InputMusic({ props }) {

    return (
        <div>
            <label htmlFor="file" className="label">File</label>
            <input type={ props == 1 ? 'text' : 'file' } name={ props == 1 ? 'url' : 'file' } id="file" />
        </div> 
    )
}


export default InputMusic

/* {
                        downloadMode == 0 && (
                        <div>
                            <label htmlFor="file" className="label">File</label>
                            <input type="file" name="file" id="file"
                            />
                        </div>
                        )
                        
                    }
                    {
                        downloadMode == 1 && (
                            <div>
                                <label htmlFor="dowloadMusic" className="label">
                                    Baixar Música
                                </label>
                                <input type="text" name="url" id="dowloadMusic" />
                            </div>
                            )
                    }  */