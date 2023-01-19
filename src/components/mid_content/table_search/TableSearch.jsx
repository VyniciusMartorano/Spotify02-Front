import React, { Component } from "react"
import './style.css'
import ItemAlbum from "../searched_itens/ItemAlbum"
import ItemArtist from "../searched_itens/ItemArtist"
import ItemMusic from "../searched_itens/item_music/ItemMusic"
import ItemPlaylist from "../searched_itens/ItemPlaylist"
import SEARCH_OPTIONS from "../../../utils/enums/enumSearchOptions"




class TableSearch extends Component {
    constructor(props) {
        super(props)
    }


    switchBetweenComponents(activeId, props, index) {
        switch (activeId) {
            case SEARCH_OPTIONS.MUSIC:
                return <ItemMusic key={props.id} index={index} music={props} />
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
            <table id="table-searched-itens" cellPadding="5">
            <thead style={{height: "40px"}} className="border-thead pad-thead margin translucid-text-header">
                <tr id="tr-header">
                    <th className="item-thead align-center not-selection">#</th>
                    <th style={{width: "50%"}} className="item-thead align-left pad-l-20 not-selection">TÍTULO</th>
                    <th className="item-thead align-left not-selection">ÁLBUM</th>
                    <th  className="align-right not-selection"></th>
                    <th className="item-thead align-right not-selection" style={{fontSize: '1.1em'}}><i className="fa-regular fa-clock"></i></th>
                    <th style={{width: '50px'}} className="align-left not-selection"></th>
                </tr>
            </thead>
            <tbody>
                <tr style={{height: '25px'}}></tr>

                {this.props.search_results.map((item, index) => this.switchBetweenComponents(this.props.optionSearch, item, index))}

            </tbody>
        </table>
        )
    }
}


export default TableSearch
