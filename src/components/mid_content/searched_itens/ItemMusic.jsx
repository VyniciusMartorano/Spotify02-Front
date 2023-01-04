import React, { useState } from "react"


const ItemMusic = ({ music }) => {
    const [isPlaying, setIsPlaying] = useState(false)


    const startMusic = () => {

    }

    return (
        <div className="container-item-searched">
            <div className="left-side-searched-item">
                <div className="btn-play-box">
                    <i onClick={() => startMusic()} className={`fa fa-play`}></i>
                </div>
                <img src="" alt="" />
                <div className="box-description-item-searched">
                    <h3>{music.title}</h3>
                    <span>{music.subtitle}</span>
                </div>
            </div>
            <div className="right-side-searched-item">
                <i className="fa fa-heart"></i>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    )
}

export default ItemMusic