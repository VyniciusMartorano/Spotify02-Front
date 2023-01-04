import React, { Component } from "react"
import './../../assets/css/Search.css'
import { Item } from "../ItemHeaderSearch"
import ItemAlbum from "./searched_itens/ItemAlbum"
import ItemArtist from "./searched_itens/ItemArtist"
import ItemMusic from "./searched_itens/ItemMusic"
import ItemPlaylist from "./searched_itens/ItemPlaylist"
import { connect } from "react-redux"
import SEARCH_OPTIONS from "../../utils/enumSearchOptions"


class Search extends Component {
    constructor(props) {
        super(props)

        this.headerFilters = [
            {id: SEARCH_OPTIONS.MUSIC, description: 'Músicas'}, 
            {id: SEARCH_OPTIONS.PLAYLIST, description: 'Playlists'}, 
            {id: SEARCH_OPTIONS.ALBUM, description: 'Álbuns'}, 
            {id: SEARCH_OPTIONS.ARTIST, description: 'Artistas'}
        ]

    }

    switchBetweenComponents(activeId, props) {
        switch (activeId) {
            case SEARCH_OPTIONS.MUSIC:
                return <ItemMusic music={props} />
            case SEARCH_OPTIONS.PLAYLIST:
                return <ItemPlaylist playlist={props} />
            case SEARCH_OPTIONS.ALBUM:
                return <ItemAlbum album={props} />
            case SEARCH_OPTIONS.ARTIST:
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
                            activeId={this.props.optionSearch}
                            onClick={(id) => this.setState({activeId: id})} 
                        />)}
                </div>
                <div id="content-search">   
                    {this.props.search_results.map((item) => this.switchBetweenComponents(this.props.optionSearch, item))}

                    <h1 style={{color: 'black', backgroundColor : 'white'}}>
                        {this.props.text_filter}
                    </h1>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return ({
        text_filter: state.searchReducer.text_filter,
        search_results: state.searchReducer.search_results,
        optionSearch: state.searchReducer.optionSearch
    })
}


export default connect(mapStateToProps)(Search)