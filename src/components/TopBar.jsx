import React, { Component } from "react"
import "./../assets/css/TopBar.css"


class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {filter: ''}
    }   


    limpaFiltro() {
        this.setState({filter: ''})
    }

    render() {
        return (
            <header className="top-bar-container">
                <div className="left-side-bar">
                </div>
                <div className="search-container">
    
                    <div className="home-btn-box">
                        <i className="fa-solid fa-house"></i>
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
                    />
                </div>
            </header>
        )
    }
}

export default TopBar