import React, { Component } from "react"
import "./../../assets/css/TopBar.css"
import { Navigate } from "react-router-dom" 
import { doLogout} from "../services/auth"
import Service from "./Service"
import { connect } from "react-redux"
import { actInsertTextSearch, actRefreshResultsOfSearch } from "../../store/actions/searchActions"


class TopBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logout: false
        }

        this.currentComponent = ''
        this.user = {}
        this.Serv = new Service()
    }   
    
    componentDidMount() {
        this.getUser()
    }

    componentDidUpdate() {
        this.setFilterComponent()
    }

    async getUser() {
        await this.Serv.getUser().then(
            ({ data }) => this.user = data
        )
    }

    limpaFiltro = () => this.setState({filter: ''})
    
    
    logout() {
        doLogout()
        this.setState({logout: true})
    }

    changeMidComponentTo = (keyComponent) =>this.props.changeMidComponentTo(keyComponent)

    setFilterComponent = () => {
        if (this.props.text_filter.length == 1) {
            if (this.currentComponent == 'search') return

            this.currentComponent = 'search'
            this.changeMidComponentTo('search')
        }
        else if (this.props.text_filter.length == 0) {
            if (this.currentComponent == 'playlists') return

            this.currentComponent = 'playlists'
            this.changeMidComponentTo('playlists')
        }    
    }

    setValueOfSearch(value) {
        
        this.props.dispatch(actInsertTextSearch({text_filter: value}))
    }

    searchResults(filter) {
        console.log(filter)
        this.Serv
    }

    render() {
        return (
            <header className="top-bar-container">
                <div className="left-side-bar">
                </div>
                <div className="search-container">
    
                    <div className="home-btn-box">
                        <i className="fa-solid fa-house icon" onClick={() => this.changeMidComponentTo('playlists')}></i>
                    </div>
    
                    <form className="search-box">
                        <div className="icon-search-box">
                            <i className="fa-solid icon fa-magnifying-glass"></i>
                        </div>
                        <input 
                            type="text" 
                            name="" 
                            className="input-search"
                            placeholder="O que você quer ouvir?"
                            value={this.props.text_filter}
                            onChange={({ target }) => this.setValueOfSearch(target.value)}
                        />
                        <div className="icon-remove-text-box">
                            {
                                this.state.filter && (<i onClick={() => this.limpaFiltro()
                               } className="fa-solid fa-xmark icon-remove-text"></i>) 
                            }
                        </div>
                    </form>
                </div>
                <div className="icon-profile-container">
                    <img 
                        src={this.user.image} 
                        alt=""
                        className="img-profile" 
                        onClick={() => this.logout()}
                    />
                </div>
                {this.state.logout && (<Navigate to="/login"/>)}
            </header>
        )
    }
}
const mapStateToProps = (state)  => {
    return ({
        text_filter: state.searchReducer.text_filter
    })
}


export default connect(mapStateToProps)(TopBar)