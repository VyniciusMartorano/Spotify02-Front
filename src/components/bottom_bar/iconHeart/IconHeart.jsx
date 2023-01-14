import React from "react"
import './IconHeart.css'
import { useDispatch, useSelector } from "react-redux"
import { actSetCurrentMusicIsLiked } from "../../../store/actions/musicActions"



export default function IconHeart (props) {
    const dispatch = useDispatch()
    const liked = useSelector(state => state.musicReducer.currentMusic.liked)

    return (
        <div className="icon-heart">             
            <i 
            className={liked ? 
                "fa-solid fa-heart"
                : "fa-regular fa-heart " 
            }
            onClick={() => dispatch(actSetCurrentMusicIsLiked({liked: !liked}))}
            >
            </i>  
        </div>
    )
    
}