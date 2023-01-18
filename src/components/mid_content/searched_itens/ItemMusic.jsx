import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { actSetCurrentMusic } from "../../../store/actions/musicActions"



const ItemMusic = ({ music }) => {
    const dispatch = useDispatch()

    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`

    const getMusicWithFormated = async () => {
        const audio = new Audio(url + music.file)
        const formated = {...music}

        await new Promise(resolve => {
            audio.addEventListener(
                'loadedmetadata', 

                ({ target }) => {
                    formated.duration = target.duration
                    resolve()
                }
            )
        }) 

        return formated
    }

    const setCurrentMusic = async () => {


        dispatch(actSetCurrentMusic({currentMusic: await getMusicWithFormated()}))
    }

    return (
        <tr className="item-table-search not-selection">
            <td className="align-left color-white">                        
                <div className="btn-play-box">
                    <i className="fa fa-play" onClick={() => setCurrentMusic()}></i>
                </div>
            </td>
            <td className="left-side-item-table align-left pad-40">
                <img 
                    className="img-item-table-searched" 
                    src={url + music.image} 
                    width="45" 
                    height="45"
                    alt="" 
                />
                <div className="box-description-item-searched">
                    <span className="bold title-music-table">{music.music_name}</span>
                    <span className="color-white">{music.artist_name}</span>
                </div>
            </td>
            <td className="mid-item-table-search align-left color-white">
                <div>{music.music_name}</div>
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