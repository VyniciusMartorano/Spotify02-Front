import React, { Component } from "react"
import "./../assets/css/TopBar.css"
import { Navigate } from "react-router-dom" 
import { doLogout} from "./services/auth"


class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {filter: '', logout: false}
    }   

    limpaFiltro() {
        this.setState({filter: ''})
        
    }

    logout() {
        doLogout()
        this.setState({logout: true})
    }
    changeMidComponentTo(keyComponent) {
        this.props.changeMidComponentTo(keyComponent)
    }

    render() {
        return (
            <header className="top-bar-container">
                <div className="left-side-bar">
                </div>
                <div className="search-container">
    
                    <div className="home-btn-box">
                        <i className="fa-solid fa-house" onClick={() => this.changeMidComponentTo('playlists')}></i>
                    </div>
    
                    <form className="search-box">
                        <div className="icon-search-box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input 
                            type="text" 
                            name="" 
                            className="input-search"
                            placeholder="O que você quer ouvir?"
                            value={this.state.filter}
                            onChange={({ target }) => this.setState({filter: target.value})}
                        />
                        <div className="icon-remove-text-box">
                            {
                                this.state.filter ? (<i onClick={() => this.limpaFiltro()} className="fa-solid fa-xmark icon-remove-text"></i>) : ''

                            }
                        </div>
                    </form>
                </div>
                <div className="icon-profile-container">
                    <img 
                        src={require('./../utils/images/Victor 3x4-small.png')} 
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

export default TopBar