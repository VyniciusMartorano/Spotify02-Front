import React, { useState } from "react"


const ItemPlaylist = ({ playlist }) => {
    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`


    return (
        <tr className="item-table-search not-selection">
            <td className="align-left color-white">                        
                <div className="btn-play-box">
                    <i className="fa fa-play"></i>
                </div>
            </td>
            <td className="left-side-item-table align-left pad-40">
                <img 
                    className="img-item-table-searched" 
                    src={url + playlist.thumbnail} 
                    width="45" 
                    height="45"
                    alt="" 
                />
                <div className="box-description-item-searched">
                    <span className="bold title-playlist-table">{playlist.title}</span>
                    <span className="color-white">{playlist.descricao}</span>
                </div>
            </td>
            <td className="mid-item-table-search align-left color-white">
                <div>{playlist.descricao}</div>
            </td>
            <td className="align-right color-white">
                <i className="fa fa-heart"></i>
            </td>
            <td className="align-right color-white">2:20</td>
            <td className="align-center color-white">
                <i className="fa-solid fa-ellipsis"></i>
            </td>
        </tr>
    )
}

export default ItemPlaylist