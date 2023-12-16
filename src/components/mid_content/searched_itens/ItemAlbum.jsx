import React, { useState } from "react"


const ItemAlbum = ({ album }) => {
    const [isPlaying, setIsPlaying] = useState(false)




    return (
        <div className="container-item-searched">
            <div className="left-side-searched-item">
                <div className="btn-play-box">
                    <i onClick={() => startMusic()} className={`fa fa-play`}></i>
                </div>
                <img src={album} alt="" />
                <div className="box-description-item-searched">
                    {/* <h3>{album.title}</h3> */}
                    {/* <span>{item.nome_artista}</span> */}
                </div>
            </div>
            <div className="right-side-searched-item">
                <i className="fa fa-heart"></i>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    )
}

export default ItemAlbum