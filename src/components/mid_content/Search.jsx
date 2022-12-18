import React, { Component } from "react"
import './../../assets/css/Search.css'
import { Item } from "../ItemHeaderSearch"




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
        enumFilters = {
            1: 'musics',
            2: 'playlists',
            3: 'albuns',
            4: 'artists'
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
                            (item) =>
                        )}
                </div>
            </div>
        )
    }

}

export default Search