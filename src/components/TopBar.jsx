import React from "react"
import "./../assets/css/TopBar.css"


const TopBar = () => {
    

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
                    />
                    <div className="icon-remove-text-box">

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

export default TopBar