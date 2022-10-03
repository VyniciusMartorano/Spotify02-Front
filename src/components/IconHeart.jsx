import React, { useState } from "react"
import '../assets/css/IconHeart.css'




export default function IconHeart ({ liked, onChange }) {

    return (
        <div>             
            <i 
            className={liked ? 
                "fa-solid fa-heart icon-heart"
                : "fa-regular fa-heart icon-heart" 
            }
            onClick={() => onChange(!liked)}
            >
            </i>  
        </div>
    )
    
}