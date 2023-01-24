import React from "react"
import './IconHeart.css'
import { useDispatch, useSelector } from "react-redux"
import { actSetCurrentMusicIsLiked } from "../../../store/actions/coreActions"
import { actRefreshResultsOfSearch } from "../../../store/actions/searchActions"
import Service from "./Service"


export default function IconHeart (props) {
    const dispatch = useDispatch()
    const currentMusic = useSelector(state => state.musicReducer.currentMusic)
    const search_results = useSelector(state => state.searchReducer.search_results)
    const is_liked = useSelector(state => state.musicReducer.currentMusic.is_liked)

    const Serv = new Service()


    const setMusicLiked = () => {
        Serv.setMusicLiked(currentMusic.id).then(
            () => dispatch(actSetCurrentMusicIsLiked({is_liked: !currentMusic.is_liked})),
            () => addToastMessage('error', 'Erro!', `Ocorreu um erro ao curtir a musica ${music.music_name}`)
        )
    }

    //TODO: atualizar o estado da lista de pesquisa quando der like no player
    const setIsLikedInItemSearchResults = () => {
        const musicIndex = search_results.findIndex(music => music.id == currentMusic.id)
        
        if (musicIndex != -1) {
            const array = [...search_results]
            array[musicIndex].is_liked = !is_liked

            dispatch(actRefreshResultsOfSearch({search_results: array}))
        }
    }

    const setIsLikedInMusic = () => {
        setMusicLiked()
        setIsLikedInItemSearchResults()
    }

    return (
        <div className="icon-heart">             
            <i 
            className={
                is_liked ? "fa-solid fa-heart":"fa-regular fa-heart" 
            }
            onClick={() => setIsLikedInMusic()}
            >
            </i>  
        </div>
    )
    
}