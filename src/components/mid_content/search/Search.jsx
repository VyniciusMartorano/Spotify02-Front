import React, { Component } from "react"
import './../../../assets/css/Search.css'
import { Item } from "../../ItemHeaderSearch"
import ItemAlbum from "../searched_itens/ItemAlbum"
import ItemArtist from "../searched_itens/ItemArtist"
import ItemMusic from "../searched_itens/ItemMusic"
import ItemPlaylist from "../searched_itens/ItemPlaylist"
import { connect } from "react-redux"
import SEARCH_OPTIONS from "../../../utils/enums/enumSearchOptions"
import { actSetOptionSearch } from "../../../store/actions/searchActions"


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
                return <ItemMusic key={props.id} music={props} />
            case SEARCH_OPTIONS.PLAYLIST:
                return <ItemPlaylist key={props.id} playlist={props} />
            case SEARCH_OPTIONS.ALBUM:
                return <ItemAlbum key={props.id} album={props} />
            case SEARCH_OPTIONS.ARTIST:
                return <ItemArtist key={props.id} artist={props} />
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
                            onClick={(id) => this.props.dispatch(actSetOptionSearch({optionSearch: id}))} 
                        />)}
                </div>
                <div id="content-search">   
                    {this.props.search_results.map((item) => this.switchBetweenComponents(this.props.optionSearch, item))}                    
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