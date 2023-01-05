import React from "react"


function CustomMessage({ title, bodyMsg }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{bodyMsg}</p>
        </div>
    )
}

export default CustomMessage