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

                    <table id="table-searched-itens" cellpadding="5">
                        <thead>
                            <tr id="tr-header">
                                <th class="item-thead align-center">#</th>
                                <th style="width: 50%;" class="item-thead align-left pad-l-20">TÍTULO</th>
                                <th class="item-thead align-left">ÁLBUM</th>
                                <th  class="align-right"></th>
                                <th class="item-thead align-right"><i class="fas fa-clock"></i></th>
                                <th class="align-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="item-table-search">
                                <td class="align-left">                        
                                    <div class="btn-play-box">
                                        <i class="fa fa-play"></i>
                                    </div>
                                </td>
                                <td class="left-side-item-table align-left pad-40">
                                    <img class="img-item-table-searched" src="image.jfif" width="45" height="45" alt="" />
                                    <div class="box-description-item-searched">
                                        <span>É Sal</span>
                                        <span>Matuê</span>
                                    </div>
                                </td>
                                <td class="mid-item-table-search align-left">
                                    <div>Máquina do tempo</div>
                                </td>
                                <td class="align-right">
                                    <i class="fa fa-heart"></i>
                                </td>
                                <td class="align-right">2:20</td>
                                <td class="align-center">
                                    <i  class="fa-solid fa-ellipsis"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>


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