import React, { Component } from "react"
import "./../../assets/css/TopBar.css"
import Service from "./Service"
import { connect } from "react-redux"
import { actInsertTextSearch, actRefreshResultsOfSearch } from "../../store/actions/searchActions"
import { enumComponents } from "../../utils/enums/enumComponents"
import addToastMessage from "../addToastMessage"
import { ToastContainer } from "react-toastify"
import { actChangeMidComponent, actSetIsLogged } from "../../store/actions/coreActions"



class TopBar extends Component {
    constructor(props) {
        super(props)
        this.currentComponent = ''
        this.Serv = new Service()
    }   

    componentDidMount() {
        this.currentComponent = this.props.midComponentActiveId
    }

    componentDidUpdate() {
        this.setFilterComponent()
    }


    limpaFiltro = () => this.props.dispatch(actInsertTextSearch({text_filter: ''}))
    
    
    logout() {
        this.props.dispatch(actSetIsLogged({isLogged: false}))
    }


    setFilterComponent = () => {
        if (this.props.text_filter.length == 1) {
            if (this.currentComponent == enumComponents.SEARCH) return

            this.currentComponent = enumComponents.SEARCH
            this.changeMidComponentTo(enumComponents.SEARCH)
        }
        else if (this.props.text_filter.length == 0) {
            if (this.currentComponent == enumComponents.PLAYLISTS) return

            this.currentComponent = enumComponents.PLAYLISTS
            this.changeMidComponentTo(enumComponents.PLAYLISTS)
        }    
    }

    setValueOfSearch = (value) => {
        this.props.dispatch(actInsertTextSearch({text_filter: value}))
        this.searchResults(value)
    }

    searchResults(value){
        this.Serv.search(value, this.props.optionSearch).then(
            ({ data }) => this.props.dispatch(actRefreshResultsOfSearch({search_results: data})),
            () => addToastMessage('error', 'Erro!', `Ocorreu um erro ao buscar pelo termo "${text_filter}"`)
        )
    }

    changeMidComponentTo(keyComp) {
        this.props.dispatch(actChangeMidComponent({midComponentActiveId: keyComp}))
    }

    render() {
        return (
            <div>
                <ToastContainer/>

                <header className="top-bar-container">
                    <div className="left-side-bar">
                    </div>
                    <div className="search-container">
                        <div className="home-btn-box"  onClick={() => this.changeMidComponentTo(enumComponents.PLAYLISTS)}>
                            <i className="fa-solid fa-house icon"></i>
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
                                    this.props.text_filter && (<i onClick={() => this.limpaFiltro()
                                   } className="fa-solid fa-xmark icon-remove-text"></i>)
                                }
                            </div>
                        </form>
                    </div>
                    <div className="icon-profile-container">
                        <img
                            src={this.props.user.image}
                            alt=""
                            className="img-profile"
                            onClick={() => this.logout()}
                        />
                    </div>
                </header>
            </div>
        )
    }
}
const mapStateToProps = (state)  => {
    return ({
        text_filter: state.searchReducer.text_filter,
        midComponentActiveId: state.coreReducer.midComponentActiveId,
        user: state.coreReducer.user,
        optionSearch: state.searchReducer.optionSearch
    })
}


export default connect(mapStateToProps)(TopBar)