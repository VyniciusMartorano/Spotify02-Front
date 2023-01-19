import React, { Component } from "react"
import './../../../assets/css/Search.css'
import { Item } from "../../ItemHeaderSearch"
import { connect } from "react-redux"
import SEARCH_OPTIONS from "../../../utils/enums/enumSearchOptions"
import { actSetOptionSearch } from "../../../store/actions/searchActions"
import TableSearch from "../table_search/TableSearch"


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
                    <TableSearch 
                        search_results={this.props.search_results} 
                        optionSearch={this.props.optionSearch}
                    />

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