import React, { useState } from "react"
import '../assets/css/IconHeart.css'




export default function IconHeart ({ liked, onChange }) {

    return (
        <div className="icon-heart">             
            <i 
            className={liked ? 
                "fa-solid fa-heart"
                : "fa-regular fa-heart " 
            }
            onClick={() => onChange(!liked)}
            >
            </i>  
        </div>
    )
    
}