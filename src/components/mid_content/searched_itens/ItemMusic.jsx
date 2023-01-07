import React, { useState } from "react"


const ItemMusic = ({ music }) => {

    return (
        <tr className="item-table-search not-selection">
            <td className="align-left color-white">                        
                <div className="btn-play-box">
                    <i className="fa fa-play"></i>
                </div>
            </td>
            <td className="left-side-item-table align-left pad-40">
                <img className="img-item-table-searched" src={require('./image.jfif')} width="45" height="45" alt="" />
                <div className="box-description-item-searched">
                    <span className="bold title-music-table">É Sal</span>
                    <span className="color-white">Matuê</span>
                </div>
            </td>
            <td className="mid-item-table-search align-left color-white">
                <div>{music.tltle}</div>
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

export default ItemMusic