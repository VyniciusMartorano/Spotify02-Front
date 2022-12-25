import React, { Component } from "react"
import './../../assets/css/Search.css'
import { Item } from "../ItemHeaderSearch"
import ItemAlbum from "./searched_itens/ItemAlbum"
import ItemArtist from "./searched_itens/ItemArtist"
import ItemMusic from "./searched_itens/ItemMusic"
import ItemPlaylist from "./searched_itens/ItemPlaylist"



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeId: 1,
            results: []
        }
        this.headerFilters = [
            {id: 1, description: 'Músicas'}, 
            {id: 2, description: 'Playlists'}, 
            {id: 3, description: 'Álbuns'}, 
            {id: 4, description: 'Artistas'}
        ]
        this.enumFilters = {
            MUSIC: 1,
            PLAYLIST: 2,
            ALBUM: 3,
            ARTIST: 4
        }
    }

    switchBetweenComponents(activeId, props) {
        switch (activeId) {
            case this.enumFilters.MUSIC:
                return <ItemMusic music={props} />
            case this.enumFilters.PLAYLIST:
                return <ItemPlaylist playlist={props} />
            case this.enumFilters.ALBUM:
                return <ItemAlbum album={props} />
            case this.enumFilters.ARTIST:
                return <ItemArtist artist={props} />
        }
    }

    

    render() {
        return (
            <div id="search-box-section">
                <div id="header-filters-box">
                    {this.headerFilters.map(
                        (item) => <Item 
                            key={item.id} 
                            item={item}
                            activeId={this.state.activeId}
                            onClick={(id) => this.setState({activeId: id})} 
                        />)}
                </div>
                <div id="content-search">   
                    {this.state.results.map(
                        (item) => this.switchBetweenComponents(this.state.activeId, item)
                    )}
                </div>
            </div>
        )
    }

}

export default Search