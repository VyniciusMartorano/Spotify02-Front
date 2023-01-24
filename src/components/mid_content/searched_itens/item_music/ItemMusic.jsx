import React, { useState } from "react"
import "./ItemMusic.css"
import { useDispatch } from "react-redux"
import { actSetCurrentMusic, actSetMusicLiked } from "../../../../store/actions/musicActions"
import Service from "./Service"
import addToastMessage from "./../../../addToastMessage"
import { useSelector } from "react-redux"


const ItemMusic = ({ music, index }) => {
    const dispatch = useDispatch()
    const Serv = new Service()
    const currentMusic = useSelector(state => state.musicReducer.currentMusic)

    const [isLiked, setIsLiked] = useState(music.is_liked) 

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

    const setMusicLiked = () => {
        Serv.setMusicLiked(music.id).then(
            () => {
                if (music.id == currentMusic.id)
                    dispatch(actSetMusicLiked({is_liked: !isLiked}))
                setIsLiked(!isLiked)
            },
            () => addToastMessage('error', 'Erro!', `Ocorreu um erro ao curtir a musica ${music.music_name}`)
        )

    }

    return (
        <tr className="item-table-search not-selection">
            <td style={{width: '40px'}} className="align-left color-white">                        
                <div className="btn-play-box">
                    <div className="index-searched-music">
                        {index + 1}
                    </div>
                    <i className="fa-solid fa-play icon-play-music-searched" onClick={() => setCurrentMusic()} />
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
                <i 
                    className={
                        `icon-heart-item-searched ${isLiked ? '':'dont-liked'} 
                        fa-${isLiked ? 'solid':'regular' } 
                        fa-heart`
                    } 
                    onClick={() => setMusicLiked()}
                ></i>
            </td>
            <td className="align-right color-white">2:20</td>
            <td className="align-center color-white">
                <i className="icon-reticencias fa-solid fa-ellipsis"></i>
            </td>
        </tr>
    )
}

export default ItemMusic